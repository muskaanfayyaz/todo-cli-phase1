# Todo CLI - Phase 1: In-Memory Task Manager

A clean, beginner-friendly **menu-driven** command-line todo application built with Python 3.13+ following Clean Architecture principles. Features an intuitive numbered menu interface with step-by-step prompts, perfect for learning professional software design patterns in an accessible way.

## Table of Contents

- [Quick Start](#quick-start)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Menu-Driven vs Command-Based Interface](#menu-driven-vs-command-based-interface)
- [Phase 1 Scope](#phase-1-scope)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Future Phases](#future-phases)
- [Example Session](#example-session)
- [Error Handling Examples](#error-handling-examples)
- [Contributing](#contributing)

---

## Quick Start

Want to jump right in? Here's how to get started in under a minute:

```bash
# 1. Clone the repository
git clone <repository-url>
cd todo-cli-phase1

# 2. Run the application (Python 3.13+ required)
cd src
python3 main.py
```

That's it! You'll see a numbered menu (1-8). Simply select an option and follow the prompts.

**Example First Interaction:**
```
Select an option (1-8): 1
Enter task title: My first task
Enter task description (optional): Learning to use Todo CLI

✓ Task created successfully!
```

**Two ways to interact:**
- **Beginner:** Select menu numbers (1-8) and follow prompts
- **Power user:** Type commands directly (e.g., `add "Task" "Description"`)

---

## Overview

Todo CLI is a terminal-based task management application designed to demonstrate clean code principles and architectural patterns while remaining accessible to beginners. The application provides a simple, intuitive **menu-driven interface** for managing daily tasks entirely in memory, with support for both guided prompts and direct command entry.

**Key Highlights:**
- **Menu-Driven Interface** - Numbered options (1-8) for easy navigation
- **Dual Input Mode** - Choose between menu prompts or direct commands
- **Clean Architecture** - Professional implementation with clear layer separation
- **100% Python Standard Library** - No external dependencies required
- **Beginner-Friendly** - Clear prompts, helpful error messages, and intuitive flow
- **Professional Error Handling** - Comprehensive validation and user guidance
- **Beautiful Output** - Formatted tables with box-drawing characters
- **Interactive Experience** - Step-by-step prompts for all operations

---

## Features

- **Menu-Driven Interface**: User-friendly numbered menu (1-8) for easy navigation
- **Dual Input Mode**: Choose between menu-driven or direct command entry
- **Create Tasks**: Add tasks with titles and optional descriptions through guided prompts
- **List Tasks**: View all tasks in a formatted table with box-drawing characters
- **Update Tasks**: Modify task titles and descriptions with flexible options
- **Delete Tasks**: Remove tasks you no longer need
- **Task Status**: Mark tasks as completed or pending with visual feedback
- **Command Aliases**: Multiple ways to invoke commands (e.g., `ls`, `list`, `all`)
- **Input Validation**: Comprehensive validation with helpful error messages
- **Beautiful Output**: Formatted tables with borders and clear success/error messages
- **Interactive Prompts**: Step-by-step guidance for each operation

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.13+ | Programming language |
| **UV** | Latest | Package and project management |
| **typing** | stdlib | Type hints for code quality |
| **dataclasses** | stdlib | Simplified entity classes |
| **enum** | stdlib | Task status enumeration |
| **datetime** | stdlib | Timestamp handling |
| **abc** | stdlib | Abstract base classes |

**No External Dependencies** - This project uses only Python's standard library to keep it simple and accessible.

---

## Architecture

This project follows **Clean Architecture** (Hexagonal Architecture) with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                  Presentation Layer                      │
│              (CLI Interface & Handlers)                  │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  Application Layer                       │
│              (Use Cases & Business Logic)                │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    Domain Layer                          │
│              (Entities & Business Rules)                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                 Infrastructure Layer                     │
│              (In-Memory Data Storage)                    │
└─────────────────────────────────────────────────────────┘
```

**Benefits:**
- Easy to test (isolated business logic)
- Easy to extend (add new storage in future phases)
- Easy to understand (clear responsibilities)
- Beginner-friendly (follows SOLID principles)

---

## Setup Instructions

### Prerequisites

- Python 3.13 or higher
- UV package manager ([Installation Guide](https://github.com/astral-sh/uv))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-cli-phase1
   ```

2. **Install UV** (if not already installed)
   ```bash
   # macOS/Linux
   curl -LsSf https://astral.sh/uv/install.sh | sh

   # Windows
   powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
   ```

3. **Set up the project** (Optional - no dependencies needed)
   ```bash
   uv sync
   ```

---

## Usage

### Running the Application

Navigate to the `src` directory and run:

```bash
cd src
python3 main.py
```

Or using UV:

```bash
cd src
uv run python main.py
```

### First-Time User Experience

```
╔════════════════════════════════════════════════════╗
║            Welcome to Todo CLI v1.0!               ║
║        Your simple in-memory task manager          ║
╚════════════════════════════════════════════════════╝

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8):
```

**Note:** The application features a user-friendly menu-driven interface. Simply enter a number (1-8) to select an option. Advanced users can also type commands directly (e.g., `add`, `list`, `delete`).

---

## Available Commands

### Menu Options

The application features an intuitive menu-driven interface:

| Option | Command | Aliases | Description |
|--------|---------|---------|-------------|
| **1** | `add` | `create`, `new` | Create a new task with title and description |
| **2** | `list` | `ls`, `all` | Display all tasks in a formatted table |
| **3** | `update` | `edit`, `modify` | Update a task's title or description |
| **4** | `delete` | `remove`, `rm` | Delete a task permanently |
| **5** | `complete` | `done`, `finish` | Mark task as completed |
| **6** | `uncomplete` | `incomplete`, `undo` | Mark task as pending |
| **7** | `help` | `?`, `h` | Show detailed help message |
| **8** | `exit` | `quit`, `q` | Exit the application |

**Two Ways to Use:**
1. **Menu-driven (Beginner-friendly):** Select option numbers (1-8) and follow prompts
2. **Command-based (Power users):** Type commands directly with arguments

### Detailed Usage Examples

#### 1. Add a Task (Menu-driven)
```
Select an option (1-8): 1
Enter task title: Buy groceries
Enter task description (optional): Milk, eggs, bread

✓ Task created successfully!

  ID: 1
  Title: Buy groceries
  Description: Milk, eggs, bread
  Status: pending
  Created: 2025-12-26 14:30:45
```

Or using direct command:
```
Select an option (1-8): add "Buy groceries" "Milk, eggs, bread"
```

#### 2. List All Tasks
```
Select an option (1-8): 2

┌────┬────────────────────┬──────────────────────┬───────────┐
│ ID │ Title              │ Description          │ Status    │
├────┼────────────────────┼──────────────────────┼───────────┤
│ 1  │ Buy groceries      │ Milk, eggs, bread    │ pending   │
│ 2  │ Call dentist       │                      │ pending   │
│ 3  │ Finish report      │ Q4 sales analysis    │ completed │
└────┴────────────────────┴──────────────────────┴───────────┘

Total: 3 tasks (2 pending, 1 completed)
```

#### 3. Update a Task (Menu-driven)
```
Select an option (1-8): 3
Enter task ID: 1

What would you like to update?
1. Title only
2. Description only
3. Both title and description
Select option (1-3): 1
Enter new title: Buy groceries and supplies

✓ Task 1 updated successfully!

  ID: 1
  Title: Buy groceries and supplies
  Description: Milk, eggs, bread
  Status: pending
  Created: 2025-12-26 14:30:45
```

Or using direct command:
```
Select an option (1-8): update 1 --title "Shopping" --description "Weekly groceries"
```

#### 4. Complete a Task
```
Select an option (1-8): 5
Enter task ID: 1

✓ Task 1 marked as completed!

  Title: Buy groceries
  Status: completed
```

#### 5. Delete a Task
```
Select an option (1-8): 4
Enter task ID: 1

✓ Task 1 deleted successfully!
```

---

## Menu-Driven vs Command-Based Interface

This application supports **two ways of interaction** to accommodate different user preferences:

### 1. Menu-Driven Mode (Recommended for Beginners)

Simply select a number from the menu (1-8) and follow the interactive prompts:

```bash
Select an option (1-8): 1        # Choose "Add Task"
Enter task title: Buy groceries   # Enter title when prompted
Enter task description (optional): Milk, bread, eggs  # Enter description
```

**Benefits:**
- No need to remember command syntax
- Step-by-step guidance
- Interactive prompts for all inputs
- Clear options displayed at each step
- Ideal for beginners and casual users

### 2. Command-Based Mode (For Power Users)

Type commands directly with arguments for faster operation:

```bash
Select an option (1-8): add "Buy groceries" "Milk, bread, eggs"
Select an option (1-8): list
Select an option (1-8): complete 1
Select an option (1-8): delete 2
```

**Benefits:**
- Faster for experienced users
- Command aliases supported (e.g., `ls`, `rm`, `done`)
- No multiple prompts needed
- Direct control over all parameters
- Ideal for power users and automation

### Flexibility

You can **switch between modes at any time**! Use menu numbers when you need guidance, and use direct commands when you know what you want to do. The choice is yours.

---

## Phase 1 Scope

### What's Included ✅

- **Menu-Driven Interface**: Numbered menu (1-8) with guided prompts
- **Dual Input Mode**: Menu-driven for beginners, direct commands for power users
- **Core CRUD Operations**: Create, Read, Update, Delete tasks
- **Task Status Management**: Mark tasks as completed or pending
- **Interactive Prompts**: Step-by-step guidance for all operations
- **In-Memory Storage**: Fast, simple dictionary-based storage
- **Clean Architecture**: Proper layer separation for future extensibility
- **Input Validation**: Comprehensive validation with helpful error messages
- **Command Aliases**: Multiple ways to invoke commands (e.g., `ls`, `list`, `all`)
- **Beautiful Formatting**: Tables with box-drawing characters and formatted output
- **Error Handling**: Clear, actionable error messages with usage hints

### What's NOT Included ❌

- File persistence (coming in Phase 2)
- Database storage (coming in Phase 3)
- Task prioritization
- Due dates or reminders
- Task categories or tags
- Search and filtering
- Multi-user support
- Web interface
- Task dependencies

### Why In-Memory Only?

Phase 1 focuses on:
1. **Learning Clean Architecture** without infrastructure complexity
2. **Building a solid foundation** for future phases
3. **Keeping it simple** for educational purposes
4. **Fast iteration** during development

**Important:** All data is lost when you exit the application. This is intentional for Phase 1.

---

## Project Structure

```
todo-cli-phase1/
├── README.md                          # Project documentation
├── CLAUDE.md                          # AI-assisted development documentation
├── specs/                             # Specification documents
│   ├── functional_spec.md            # Functional requirements
│   ├── architecture_spec.md          # Technical architecture
│   └── cli_flow_spec.md              # CLI interaction flows
│
└── src/                              # Source code (Clean Architecture)
    ├── __init__.py                   # Package initialization
    ├── __main__.py                   # Module execution entry point
    ├── main.py                       # Application entry point & composition root
    │
    ├── domain/                       # Domain Layer (Business Logic)
    │   ├── __init__.py
    │   ├── entities/
    │   │   ├── __init__.py
    │   │   └── task.py              # Task entity with business rules
    │   ├── value_objects/
    │   │   ├── __init__.py
    │   │   └── task_status.py       # TaskStatus enum (pending/completed)
    │   └── exceptions.py             # Domain-specific exceptions
    │
    ├── application/                  # Application Layer (Use Cases)
    │   ├── __init__.py
    │   ├── interfaces/
    │   │   ├── __init__.py
    │   │   └── task_repository.py   # Repository interface (dependency inversion)
    │   └── use_cases/
    │       ├── __init__.py
    │       ├── add_task.py          # Add new task use case
    │       ├── list_tasks.py        # List all tasks use case
    │       ├── update_task.py       # Update task use case
    │       ├── delete_task.py       # Delete task use case
    │       ├── complete_task.py     # Complete task use case
    │       └── uncomplete_task.py   # Mark task as pending use case
    │
    ├── infrastructure/               # Infrastructure Layer (External concerns)
    │   ├── __init__.py
    │   └── repositories/
    │       ├── __init__.py
    │       └── in_memory_task_repository.py  # Dictionary-based storage
    │
    └── presentation/                 # Presentation Layer (User Interface)
        ├── __init__.py
        └── cli/
            ├── __init__.py
            ├── cli.py               # Menu-driven CLI & REPL loop
            ├── command_handlers.py  # Command handler classes
            └── formatters.py        # Output formatting (tables, details)
```

### Layer Responsibilities

| Layer | Purpose | Dependencies |
|-------|---------|--------------|
| **Domain** | Core business logic, entities, and rules | None (innermost layer) |
| **Application** | Use cases orchestrating domain logic | Domain only |
| **Infrastructure** | External concerns (storage, I/O) | Domain, Application interfaces |
| **Presentation** | User interface (CLI, menu system) | Application use cases |

**Note:** The architecture follows the **Dependency Rule**: outer layers depend on inner layers, never the reverse. This ensures the domain remains independent and testable.

---

## Design Decisions

### Why Clean Architecture?

1. **Testability**: Business logic is isolated and easy to test
2. **Flexibility**: Easy to swap storage implementations
3. **Maintainability**: Clear separation of concerns
4. **Educational**: Demonstrates professional patterns
5. **Scalability**: Prepared for future phases

### Why No External Dependencies?

1. **Simplicity**: Easy to understand and run
2. **Learning**: Focus on architecture, not libraries
3. **Portability**: Runs anywhere Python 3.13+ is installed
4. **Beginner-Friendly**: No complex dependency management

### Why UV for Package Management?

1. **Modern**: Latest Python tooling
2. **Fast**: Faster than pip
3. **Simple**: Easy to use
4. **Professional**: Industry best practice

### Why Menu-Driven Interface?

1. **Beginner-Friendly**: No need to memorize command syntax
2. **Guided Experience**: Step-by-step prompts reduce errors
3. **Discoverability**: All options visible at a glance
4. **Flexibility**: Supports both menu and direct command modes
5. **Professional**: Common pattern in enterprise CLI applications
6. **Reduced Cognitive Load**: Users focus on tasks, not syntax

### Implementation Highlights

**Dual-Mode Support:**
- Menu numbers (1-8) for guided interaction
- Direct commands for power users
- Command aliases for flexibility
- Seamless switching between modes

**User Experience:**
- Clear visual menu with box-drawing characters
- Interactive prompts for complex operations (e.g., update task)
- Contextual help messages
- Graceful error handling with recovery hints

---

## Future Phases

### Phase 2: File Persistence
- Save tasks to JSON file
- Load tasks on startup
- Data survives application restart
- No changes to domain/application layers (demonstrates Clean Architecture benefits!)

### Phase 3: Database Storage
- SQLite integration
- Proper data persistence
- Query optimization
- Migration support

### Phase 4: Advanced Features
- Task prioritization (high/medium/low)
- Due dates and reminders
- Task categories and tags
- Search and filtering
- Export/Import (JSON, CSV)

---

## Example Session

Here's a complete example of using Todo CLI with the menu-driven interface:

```bash
$ cd src && python3 main.py

╔════════════════════════════════════════════════════╗
║            Welcome to Todo CLI v1.0!               ║
║        Your simple in-memory task manager          ║
╚════════════════════════════════════════════════════╝

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8): 1
Enter task title: Buy groceries
Enter task description (optional): Milk, eggs, bread

✓ Task created successfully!

  ID: 1
  Title: Buy groceries
  Description: Milk, eggs, bread
  Status: pending
  Created: 2025-12-26 14:30:45

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8): 1
Enter task title: Call dentist
Enter task description (optional):

✓ Task created successfully!

  ID: 2
  Title: Call dentist
  Description:
  Status: pending
  Created: 2025-12-26 14:31:12

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8): 2

┌────┬────────────────────┬──────────────────────┬───────────┐
│ ID │ Title              │ Description          │ Status    │
├────┼────────────────────┼──────────────────────┼───────────┤
│ 1  │ Buy groceries      │ Milk, eggs, bread    │ pending   │
│ 2  │ Call dentist       │                      │ pending   │
└────┴────────────────────┴──────────────────────┴───────────┘

Total: 2 tasks (2 pending, 0 completed)

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8): 5
Enter task ID: 1

✓ Task 1 marked as completed!

  Title: Buy groceries
  Status: completed

══════════════════════════════════════════════════════
MAIN MENU
══════════════════════════════════════════════════════
1. Add Task          - Create a new task
2. List Tasks        - View all tasks
3. Update Task       - Modify an existing task
4. Delete Task       - Remove a task
5. Complete Task     - Mark task as completed
6. Uncomplete Task   - Mark task as pending
7. Help              - Show detailed help
8. Exit              - Quit the application
══════════════════════════════════════════════════════

Select an option (1-8): 8

╔════════════════════════════════════════════════════╗
║          Thanks for using Todo CLI!                ║
╚════════════════════════════════════════════════════╝

All data has been cleared from memory.
Goodbye!
```

---

## Error Handling Examples

The application provides helpful error messages with clear guidance:

```bash
# Empty task title (menu-driven)
Select an option (1-8): 1
Enter task title:
Enter task description (optional): Test

✗ Error: Title is required
  Use: add <title> [description]

# Invalid task ID (menu-driven)
Select an option (1-8): 4
Enter task ID: abc

✗ Error: Invalid task ID 'abc'
  Task ID must be a number

# Task not found
Select an option (1-8): 3
Enter task ID: 999

✗ Error: Task with ID 999 not found
  Use 'list' to see available tasks

# Unknown command (power user mode)
Select an option (1-8): invalidcommand

✗ Error: Unknown command 'invalidcommand'

Available commands: add, complete, delete, help, list, uncomplete, update
Type 'help' for more information

# Missing update fields (menu-driven)
Select an option (1-8): 3
Enter task ID: 1

What would you like to update?
1. Title only
2. Description only
3. Both title and description
Select option (1-3): 1
Enter new title:

✗ Error: Title cannot be empty when updating
```

---

## Contributing

This is an educational project demonstrating Clean Architecture principles. Contributions are welcome!

### Guidelines

1. Follow the existing architecture patterns
2. Maintain beginner-friendly code
3. Add docstrings to all public methods
4. Keep it simple (no unnecessary complexity)
5. Test your changes manually

### Running Tests

Tests will be added in future phases. For now, manually test all commands.

---

## License

MIT License - Feel free to use this project for learning and educational purposes.

---

## Acknowledgments

- Built following Clean Architecture principles by Robert C. Martin
- Designed for hackathon demonstration and educational purposes
- Created with ❤️ for the developer community

---

## Questions or Feedback?

For questions, suggestions, or feedback, please open an issue in the repository.

**Happy Task Managing!** 🎯
