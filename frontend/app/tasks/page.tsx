"use client";

/**
 * Premium Tasks Dashboard
 *
 * World-class task management interface with premium design.
 * Features beautiful animations, intuitive interactions, and polished UI.
 */

import { useEffect, useState, useMemo } from "react";
import { getSession, signOut } from "@/lib/auth";
import { api } from "@/lib/api-client";
import AddTaskForm from "@/components/tasks/AddTaskForm";
import TaskList from "@/components/tasks/TaskList";
import { Button, LoadingState } from "@/components/ui";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

type FilterType = 'all' | 'active' | 'completed';

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load session and tasks
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const session = await getSession();

        if (!isMounted) return;

        if (!session?.user?.id) {
          console.error("[Tasks] No valid session");
          setLoading(false);
          return;
        }

        setUserId(session.user.id);
        setUserName(session.user.name || session.user.email?.split('@')[0] || 'User');

        const tasksData = await api.get<Task[]>(`/api/${session.user.id}/tasks`);

        if (!isMounted) return;

        setTasks(tasksData);
      } catch (err: any) {
        if (!isMounted) return;
        setError(err.message || "Failed to load tasks");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();
    return () => { isMounted = false; };
  }, []);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.completed);
      case 'completed':
        return tasks.filter(t => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Stats
  const stats = useMemo(() => ({
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  }), [tasks]);

  // Handlers
  const handleLogout = async () => {
    try {
      await signOut();
    } finally {
      window.location.href = "/login";
    }
  };

  const handleTaskAdded = (newTask: Task) => {
    setTasks(prev => [newTask, ...prev]);
  };

  const handleTaskUpdated = (updatedTask: Task) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  const handleTaskDeleted = (taskId: number) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  // Loading state
  if (loading) {
    return <LoadingState message="Loading your tasks..." fullScreen />;
  }

  // Error or no session state
  if (error || !userId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-8 text-center">
            {/* Error Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-danger-50 flex items-center justify-center">
              <svg className="w-8 h-8 text-danger-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              {error ? "Something went wrong" : "Login Required"}
            </h2>
            <p className="text-neutral-500 mb-8">
              {error || "Please login to view your tasks."}
            </p>

            <div className="space-y-3">
              <Button fullWidth onClick={() => window.location.href = "/login"}>
                Go to Login
              </Button>
              <Button variant="ghost" fullWidth onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-sticky bg-white/80 backdrop-blur-lg border-b border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Title & Welcome */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-neutral-900 tracking-tight">Tasks</h1>
                  <p className="text-xs text-neutral-500 hidden sm:block">Welcome back, {userName}</p>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
          <StatCard
            label="Total"
            value={stats.total}
            variant="default"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <StatCard
            label="Active"
            value={stats.active}
            variant="primary"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            label="Done"
            value={stats.completed}
            variant="success"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Add Task Section */}
        <div className="mb-6 sm:mb-8 animate-fade-in delay-100">
          <div className="bg-white rounded-xl border border-neutral-200/80 shadow-xs overflow-hidden">
            <div className="px-5 py-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-neutral-900">Add New Task</h2>
                  <p className="text-xs text-neutral-500">What do you need to accomplish?</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <AddTaskForm userId={userId} onTaskAdded={handleTaskAdded} />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-4 animate-fade-in delay-150">
          <div className="flex p-1 bg-neutral-100 rounded-lg w-fit">
            {(['all', 'active', 'completed'] as FilterType[]).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`
                  px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-150
                  ${filter === filterOption
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                  }
                `}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                <span className="ml-1.5 text-xs opacity-60">
                  ({filterOption === 'all' ? stats.total : filterOption === 'active' ? stats.active : stats.completed})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Task List */}
        <div className="animate-fade-in delay-200">
          <div className="bg-white rounded-xl border border-neutral-200/80 shadow-xs overflow-hidden">
            <TaskList
              tasks={filteredTasks}
              userId={userId}
              onUpdate={handleTaskUpdated}
              onDelete={handleTaskDeleted}
            />
          </div>
        </div>

        {/* Footer Stats */}
        {tasks.length > 0 && (
          <div className="mt-6 text-center animate-fade-in delay-300">
            <p className="text-xs text-neutral-400">
              {stats.completed} of {stats.total} tasks completed
              {stats.total > 0 && (
                <span className="ml-2 text-primary-500 font-medium">
                  ({Math.round((stats.completed / stats.total) * 100)}%)
                </span>
              )}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// Inline StatCard component for the dashboard
interface StatCardProps {
  label: string;
  value: number;
  variant: 'default' | 'primary' | 'success';
  icon?: React.ReactNode;
}

function StatCard({ label, value, variant, icon }: StatCardProps) {
  const variants = {
    default: {
      bg: 'bg-neutral-50',
      border: 'border-neutral-200/80',
      iconBg: 'bg-neutral-100',
      iconColor: 'text-neutral-500',
      valueColor: 'text-neutral-900',
      labelColor: 'text-neutral-500',
    },
    primary: {
      bg: 'bg-primary-50/50',
      border: 'border-primary-100',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
      valueColor: 'text-primary-900',
      labelColor: 'text-primary-600',
    },
    success: {
      bg: 'bg-success-50/50',
      border: 'border-success-100',
      iconBg: 'bg-success-100',
      iconColor: 'text-success-600',
      valueColor: 'text-success-900',
      labelColor: 'text-success-600',
    },
  };

  const style = variants[variant];

  return (
    <div className={`rounded-xl p-4 border ${style.bg} ${style.border} transition-all duration-200 hover:shadow-sm`}>
      <div className="flex items-center justify-between mb-2">
        {icon && (
          <div className={`w-8 h-8 rounded-lg ${style.iconBg} ${style.iconColor} flex items-center justify-center`}>
            {icon}
          </div>
        )}
      </div>
      <div className={`text-2xl sm:text-3xl font-bold ${style.valueColor} tracking-tight`}>
        {value}
      </div>
      <div className={`text-xs font-medium ${style.labelColor} uppercase tracking-wide mt-1`}>
        {label}
      </div>
    </div>
  );
}
