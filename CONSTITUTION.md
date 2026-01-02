# PROJECT CONSTITUTION
## Todo CLI - Supreme Governance Document

**Version:** 1.0
**Date:** December 26, 2025
**Status:** Active
**Authority:** Supreme rulebook for all development activities
**Scope:** All phases of Todo CLI project

---

## Table of Contents

- [Preamble](#preamble)
- [Article I: Foundational Principles](#article-i-foundational-principles)
- [Article II: Development Methodology](#article-ii-development-methodology)
- [Article III: Architecture Governance](#article-iii-architecture-governance)
- [Article IV: Code Quality Standards](#article-iv-code-quality-standards)
- [Article V: Project Structure](#article-v-project-structure)
- [Article VI: Design Patterns and Practices](#article-vi-design-patterns-and-practices)
- [Article VII: Error Handling and Validation](#article-vii-error-handling-and-validation)
- [Article VIII: Testing Requirements](#article-viii-testing-requirements)
- [Article IX: Documentation Standards](#article-ix-documentation-standards)
- [Article X: Security and Data Privacy](#article-x-security-and-data-privacy)
- [Article XI: Performance and Optimization](#article-xi-performance-and-optimization)
- [Article XII: Version Control and Git Workflow](#article-xii-version-control-and-git-workflow)
- [Article XIII: Dependency Management](#article-xiii-dependency-management)
- [Article XIV: AI Usage and Code Generation](#article-xiv-ai-usage-and-code-generation)
- [Article XV: Phase Management and Evolution](#article-xv-phase-management-and-evolution)
- [Article XVI: Contribution Guidelines](#article-xvi-contribution-guidelines)
- [Article XVII: Amendment Process](#article-xvii-amendment-process)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Decision Records](#appendix-b-decision-records)

---

## Preamble

**We, the architects and maintainers of the Todo CLI project**, in order to establish a robust, maintainable, and extensible command-line task management application that demonstrates professional software engineering practices while remaining accessible to beginners, do hereby establish this Constitution to govern all aspects of development, maintenance, and evolution of this codebase.

**Purpose:** This Constitution serves as the supreme authority for all technical decisions, architectural choices, coding standards, and development practices within the Todo CLI project.

**Binding Nature:** All code, documentation, and project artifacts MUST conform to the principles, rules, and standards set forth in this Constitution. Any deviation requires explicit documentation and justification.

---

## Article I: Foundational Principles

### Section 1.1: Core Values

The Todo CLI project is built upon these immutable core values:

1. **Simplicity First**: Choose simple solutions over complex ones
2. **Educational Value**: Code must be beginner-friendly and instructional
3. **Architectural Integrity**: Maintain Clean Architecture principles without compromise
4. **Specification-Driven**: All features trace back to written specifications
5. **Quality by Design**: Build quality into specifications, not retrofit it later
6. **Transparency**: Document all decisions, processes, and AI usage
7. **Maintainability**: Write code that others can understand and modify
8. **Extensibility**: Design for future phases and feature additions

### Section 1.2: Project Mission

**Mission Statement**: To provide a simple, well-architected, educational command-line task management tool that serves as a reference implementation of Clean Architecture principles and specification-driven development with AI assistance.

### Section 1.3: Scope Boundaries

**Phase 1 Scope (Current):**
- In-memory task management
- CLI-based interaction with menu-driven interface
- CRUD operations on tasks
- Task status management (pending/completed)
- Zero external dependencies (Python stdlib only)

**Explicitly Out of Scope (Phase 1):**
- File or database persistence
- Web interfaces
- Multi-user support
- Advanced features (priorities, due dates, categories, tags)
- Network communication
- Authentication or authorization

---

## Article II: Development Methodology

### Section 2.1: Spec-Kit Plus Methodology (MANDATORY)

All development MUST follow the **Spec-Kit Plus** methodology:

#### 2.1.1 Specification-First Requirement
- **NO CODE** shall be written without a corresponding specification
- All features MUST be specified in detail before implementation
- Specifications MUST cover: functional requirements, technical architecture, and user interaction flows

#### 2.1.2 AI-Powered Generation
- Claude Code (Anthropic) is the official AI development assistant
- Code generation MUST be performed from specifications, not ad-hoc
- All generated code MUST be reviewed for alignment with specifications

#### 2.1.3 Zero Manual Coding Principle
- Code is generated from specifications using Claude Code
- Manual coding is permitted ONLY for:
  - Bug fixes not covered by specifications
  - Emergency hotfixes (must be documented retroactively)
  - Specification updates that require code regeneration
- All manual code MUST follow the same standards as generated code

#### 2.1.4 Specification Document Structure
All specifications MUST include:
```
specs/
├── functional_spec.md      # User stories, requirements, examples
├── architecture_spec.md    # Technical architecture, patterns, structure
└── cli_flow_spec.md       # User interaction flows, commands, UI
```

### Section 2.2: Development Workflow

#### 2.2.1 Feature Development Process
```
1. Write Specification
   ↓
2. Review Specification (peer review required)
   ↓
3. Generate Code via Claude Code
   ↓
4. Review Generated Code
   ↓
5. Test Functionality
   ↓
6. Update Documentation
   ↓
7. Commit to Version Control
```

#### 2.2.2 Iteration Policy
- Iterate on specifications, not code
- If code needs changes, update specs and regenerate
- Maintain traceability from spec to implementation

### Section 2.3: Human Responsibilities

Humans MUST provide:
1. **Strategic Vision**: What to build and why
2. **Architecture Design**: How to structure the solution
3. **Requirements Analysis**: Detailed specifications
4. **Quality Standards**: Acceptance criteria
5. **Testing Strategy**: Validation and verification
6. **Code Review**: Ensuring generated code meets standards

### Section 2.4: AI Responsibilities

Claude Code MUST provide:
1. **Implementation**: Converting specifications to code
2. **Consistency**: Uniform code quality and style
3. **Pattern Application**: Applying architectural patterns correctly
4. **Documentation**: Generating comprehensive documentation
5. **Error Handling**: Implementing robust validation

---

## Article III: Architecture Governance

### Section 3.1: Clean Architecture (IMMUTABLE)

This project MUST adhere to **Clean Architecture** principles:

#### 3.1.1 The Dependency Rule (ABSOLUTE)
- Dependencies MUST point inward only
- Inner layers MUST NOT know about outer layers
- Outer layers MAY depend on inner layers

```
Presentation → Application → Domain
     ↓              ↓           ↑
Infrastructure ────────────────┘
```

#### 3.1.2 Layer Definitions

**Domain Layer** (Innermost - Zero Dependencies)
```
domain/
├── entities/           # Core business objects with identity
├── value_objects/      # Objects without identity
└── exceptions.py       # Domain-specific exceptions

Rules:
- NO imports from other layers
- ONLY business logic and rules
- NO framework dependencies
- NO I/O operations
- ONLY Python stdlib if needed
```

**Application Layer** (Depends ONLY on Domain)
```
application/
├── interfaces/         # Abstract interfaces (Repository, etc.)
└── use_cases/         # Business operations

Rules:
- Import ONLY from domain/
- Define interfaces, don't implement infrastructure
- One use case per business operation
- Pure business orchestration
```

**Infrastructure Layer** (Depends on Domain + Application)
```
infrastructure/
└── repositories/      # Concrete data access implementations

Rules:
- Implements application/interfaces
- Handles external concerns (storage, I/O)
- NO business logic
```

**Presentation Layer** (Depends on Application)
```
presentation/
└── cli/              # User interface components

Rules:
- Import use cases from application/
- Handle user interaction ONLY
- Format output
- Parse input
- NO business logic
```

### Section 3.2: Layer Isolation Requirements

#### 3.2.1 Mandatory Separation
- Each layer MUST reside in its own directory
- Cross-layer imports MUST follow the Dependency Rule
- NO circular dependencies permitted

#### 3.2.2 Communication Patterns
- Use **Dependency Injection** (constructor injection)
- Use **Interfaces** to invert dependencies
- Use **DTOs** for cross-layer data transfer if needed (future phases)

### Section 3.3: Composition Root

#### 3.3.1 Location
- `src/main.py` is the ONLY composition root
- All dependency wiring occurs here

#### 3.3.2 Responsibilities
```python
def main():
    # 1. Create infrastructure implementations
    repository = InMemoryTaskRepository()

    # 2. Create use cases with dependencies
    add_task_uc = AddTaskUseCase(repository)

    # 3. Create presentation handlers with use cases
    add_handler = AddTaskHandler(add_task_uc)

    # 4. Start application
    cli = TodoCLI(handlers)
    cli.run()
```

### Section 3.4: Architecture Evolution Rules

#### 3.4.1 Future Phase Migration
When migrating storage (Phase 2: File, Phase 3: Database):
- Domain layer: **ZERO changes permitted**
- Application layer: **ZERO changes permitted** (interfaces stay same)
- Infrastructure layer: **Add new repository implementation**
- Presentation layer: **ZERO changes permitted**
- Composition root: **Update dependency injection only**

This immutability validates the architecture.

---

## Article IV: Code Quality Standards

### Section 4.1: Python Version

**Required**: Python 3.13 or higher (MANDATORY)

**Justification**: Latest features, type hinting improvements, performance

### Section 4.2: Type Hints (MANDATORY)

#### 4.2.1 Type Annotation Requirements
- ALL public methods MUST have type hints
- ALL function parameters MUST be typed
- ALL return types MUST be specified
- Use `Optional[T]` for nullable types
- Use `List[T]`, `Dict[K,V]` for collections

**Example:**
```python
def add_task(self, title: str, description: str = "") -> Task:
    """Add a new task."""
    pass

def get_task(self, task_id: int) -> Optional[Task]:
    """Retrieve a task by ID."""
    pass
```

#### 4.2.2 Type Checking
- Static type checking with MyPy is RECOMMENDED
- No type errors permitted in production code

### Section 4.3: Naming Conventions (MANDATORY)

| Element | Convention | Example |
|---------|-----------|---------|
| **Files** | snake_case | `task_repository.py` |
| **Classes** | PascalCase | `AddTaskUseCase` |
| **Functions/Methods** | snake_case | `get_all_tasks()` |
| **Variables** | snake_case | `task_count` |
| **Constants** | UPPER_SNAKE_CASE | `MAX_TITLE_LENGTH` |
| **Private Members** | Prefix `_` | `_next_id` |
| **Modules/Packages** | snake_case | `use_cases/` |

### Section 4.4: Code Style

#### 4.4.1 Formatting Standards
- **Line Length**: Maximum 88 characters (Black default)
- **Indentation**: 4 spaces (NO tabs)
- **Blank Lines**:
  - 2 before top-level classes
  - 1 before methods
  - 1 to separate logical sections
- **Quotes**: Prefer double quotes `"` for strings
- **Imports**:
  - Group: stdlib → third-party → local
  - Alphabetical within groups
  - Absolute imports preferred

#### 4.4.2 Beginner-Friendly Code Requirement
- Code MUST be readable by beginners
- Avoid complex language features unless necessary
- Prefer explicit over implicit
- Prefer verbose over clever
- NO advanced patterns (metaclasses, decorators unless needed)

**Example of Forbidden Complexity:**
```python
# ❌ FORBIDDEN - Too clever
tasks = [t for t in tasks if (lambda x: x.status == TaskStatus.PENDING)(t)]

# ✅ REQUIRED - Clear and simple
pending_tasks = []
for task in tasks:
    if task.status == TaskStatus.PENDING:
        pending_tasks.append(task)
```

### Section 4.5: Documentation Requirements

#### 4.5.1 Docstring Standards (MANDATORY)

**Module Level:**
```python
"""Module for task entity definition.

This module contains the Task entity class representing
a todo item with validation and business rules.
"""
```

**Class Level:**
```python
class Task:
    """Task entity representing a todo item.

    Attributes:
        id: Unique task identifier (immutable)
        title: Task title (1-200 characters)
        description: Task description (0-1000 characters)
        status: Task status (pending or completed)
        created_at: Creation timestamp (immutable)
    """
```

**Method Level:**
```python
def update_title(self, title: str) -> None:
    """Update task title with validation.

    Args:
        title: New title (1-200 characters)

    Raises:
        TaskValidationError: If title is invalid

    Examples:
        >>> task.update_title("New Title")
    """
```

#### 4.5.2 Inline Comments
- Use sparingly - code should be self-documenting
- Explain **WHY**, not **WHAT**
- Required for non-obvious logic

### Section 4.6: Code Organization

#### 4.6.1 File Length
- Maximum 300 lines per file (excluding comments/docstrings)
- If exceeded, refactor into multiple files

#### 4.6.2 Function/Method Length
- Maximum 50 lines per function/method
- Prefer smaller, focused functions

#### 4.6.3 Class Responsibilities
- Single Responsibility Principle (MANDATORY)
- One class per file (generally)
- One primary responsibility per class

---

## Article V: Project Structure

### Section 5.1: Directory Structure (IMMUTABLE)

**Canonical Structure:**
```
todo-cli-phase1/
├── .claude/                    # Claude Code settings (gitignored)
├── .venv/                      # Virtual environment (gitignored)
├── specs/                      # Specification documents (MANDATORY)
│   ├── functional_spec.md
│   ├── architecture_spec.md
│   └── cli_flow_spec.md
├── src/                        # Source code (Clean Architecture)
│   ├── __init__.py
│   ├── __main__.py            # Module execution entry point
│   ├── main.py                # Composition root
│   ├── domain/                # Domain Layer
│   │   ├── __init__.py
│   │   ├── entities/
│   │   │   ├── __init__.py
│   │   │   └── task.py
│   │   ├── value_objects/
│   │   │   ├── __init__.py
│   │   │   └── task_status.py
│   │   └── exceptions.py
│   ├── application/           # Application Layer
│   │   ├── __init__.py
│   │   ├── interfaces/
│   │   │   ├── __init__.py
│   │   │   └── task_repository.py
│   │   └── use_cases/
│   │       ├── __init__.py
│   │       ├── add_task.py
│   │       ├── list_tasks.py
│   │       ├── update_task.py
│   │       ├── delete_task.py
│   │       ├── complete_task.py
│   │       └── uncomplete_task.py
│   ├── infrastructure/        # Infrastructure Layer
│   │   ├── __init__.py
│   │   └── repositories/
│   │       ├── __init__.py
│   │       └── in_memory_task_repository.py
│   └── presentation/          # Presentation Layer
│       ├── __init__.py
│       └── cli/
│           ├── __init__.py
│           ├── cli.py
│           ├── command_handlers.py
│           └── formatters.py
├── tests/                     # Test suite (future)
│   ├── __init__.py
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .gitignore
├── CONSTITUTION.md            # This file (Supreme governance)
├── CLAUDE.md                  # AI development documentation
├── README.md                  # Project documentation
└── pyproject.toml            # UV project configuration (optional Phase 1)
```

### Section 5.2: File Naming Rules

- All files: lowercase with underscores (snake_case)
- Python files: `.py` extension
- Markdown docs: `.md` extension
- Each module MUST have `__init__.py`

### Section 5.3: Module Organization

#### 5.3.1 Package Initialization
- `__init__.py` files MUST export public interfaces
- Internal utilities should NOT be exported

**Example:**
```python
# domain/__init__.py
from domain.entities.task import Task
from domain.value_objects.task_status import TaskStatus
from domain.exceptions import (
    TaskValidationError,
    TaskNotFoundError,
)

__all__ = [
    "Task",
    "TaskStatus",
    "TaskValidationError",
    "TaskNotFoundError",
]
```

### Section 5.4: Import Policy

#### 5.4.1 Absolute Imports (MANDATORY)
```python
# ✅ REQUIRED
from domain.entities.task import Task
from application.use_cases.add_task import AddTaskUseCase

# ❌ FORBIDDEN
from ..domain.entities.task import Task
from .use_cases.add_task import AddTaskUseCase
```

#### 5.4.2 Import Grouping
```python
# 1. Standard library imports
import sys
from datetime import datetime
from typing import List, Optional

# 2. Third-party imports (Phase 1: NONE)

# 3. Local application imports
from domain.entities.task import Task
from application.interfaces.task_repository import TaskRepository
```

---

## Article VI: Design Patterns and Practices

### Section 6.1: Mandatory Design Patterns

#### 6.1.1 Repository Pattern (MANDATORY)
**Purpose**: Abstract data access

**Requirements**:
- Interface defined in `application/interfaces/`
- Implementation in `infrastructure/repositories/`
- Use cases depend on interface, NOT implementation

**Example**:
```python
# application/interfaces/task_repository.py
from abc import ABC, abstractmethod
from typing import List, Optional
from domain.entities.task import Task

class TaskRepository(ABC):
    """Abstract repository for task persistence."""

    @abstractmethod
    def add(self, task: Task) -> Task:
        """Add a task."""
        pass

    @abstractmethod
    def get_by_id(self, task_id: int) -> Optional[Task]:
        """Retrieve task by ID."""
        pass
```

#### 6.1.2 Use Case Pattern (MANDATORY)
**Purpose**: Encapsulate business operations

**Requirements**:
- One use case class per business operation
- Located in `application/use_cases/`
- Single Responsibility Principle
- Clear input/output contract

**Template**:
```python
from application.interfaces.task_repository import TaskRepository
from domain.entities.task import Task

class AddTaskUseCase:
    """Use case for adding a new task."""

    def __init__(self, repository: TaskRepository):
        """Initialize with repository dependency."""
        self._repository = repository

    def execute(self, title: str, description: str = "") -> Task:
        """Execute the use case.

        Args:
            title: Task title
            description: Optional task description

        Returns:
            Created task

        Raises:
            TaskValidationError: If validation fails
        """
        # Business logic here
        pass
```

#### 6.1.3 Value Object Pattern (MANDATORY)
**Purpose**: Represent domain concepts without identity

**Requirements**:
- Immutable (no setters)
- Validation on creation
- Located in `domain/value_objects/`

**Example**:
```python
from enum import Enum

class TaskStatus(Enum):
    """Task status value object."""
    PENDING = "pending"
    COMPLETED = "completed"
```

#### 6.1.4 Dependency Injection (MANDATORY)
**Method**: Constructor injection

**Requirements**:
- All dependencies injected via `__init__`
- NO service locator pattern
- NO global variables
- Composition root in `main.py`

### Section 6.2: Forbidden Patterns (Phase 1)

The following patterns are FORBIDDEN in Phase 1 to maintain simplicity:

- ❌ Singleton pattern (use dependency injection)
- ❌ Factory pattern (unless absolutely necessary)
- ❌ Observer pattern (YAGNI)
- ❌ Decorator pattern (too advanced)
- ❌ Strategy pattern (premature abstraction)
- ❌ Template Method (YAGNI)

**Justification**: Phase 1 focuses on Clean Architecture fundamentals, not pattern complexity.

### Section 6.3: SOLID Principles (MANDATORY)

#### 6.3.1 Single Responsibility Principle
- Each class MUST have one reason to change
- Each use case MUST do one business operation

#### 6.3.2 Open/Closed Principle
- Open for extension (new repositories)
- Closed for modification (domain layer stable)

#### 6.3.3 Liskov Substitution Principle
- Repository implementations MUST be interchangeable
- Use interface contracts

#### 6.3.4 Interface Segregation Principle
- Keep interfaces focused and minimal
- Don't force implementations to implement unused methods

#### 6.3.5 Dependency Inversion Principle
- Depend on abstractions (interfaces)
- Don't depend on concretions

---

## Article VII: Error Handling and Validation

### Section 7.1: Exception Hierarchy (MANDATORY)

**Structure**:
```python
Exception
└── TodoAppException (base custom exception)
    ├── DomainException
    │   ├── TaskValidationError
    │   └── InvalidTaskDataError
    ├── ApplicationException
    │   ├── TaskNotFoundError
    │   └── RepositoryError
    └── PresentationException
        └── InvalidCommandError
```

**Location**: `domain/exceptions.py`

**Implementation**:
```python
class TodoAppException(Exception):
    """Base exception for all Todo app errors."""
    pass

class DomainException(TodoAppException):
    """Base exception for domain layer errors."""
    pass

class TaskValidationError(DomainException):
    """Raised when task validation fails."""
    pass

class ApplicationException(TodoAppException):
    """Base exception for application layer errors."""
    pass

class TaskNotFoundError(ApplicationException):
    """Raised when task is not found by ID."""
    pass
```

### Section 7.2: Error Handling Strategy

#### 7.2.1 Layer-Specific Handling

**Domain Layer**:
- Raise validation errors immediately
- Use specific exception types
- Include helpful error messages

**Application Layer**:
- Catch domain errors if needed
- Raise application-specific errors (e.g., TaskNotFoundError)
- Let other errors bubble up

**Presentation Layer**:
- Catch ALL exceptions
- Format errors for user display
- NEVER let exceptions crash the application

**Infrastructure Layer**:
- Handle storage-specific errors
- Convert to application exceptions

#### 7.2.2 Error Message Guidelines (MANDATORY)

All error messages MUST be:
1. **Clear**: No technical jargon
2. **Specific**: Tell user what went wrong
3. **Actionable**: Suggest how to fix it
4. **Consistent**: Use standard format

**Format**:
```
✗ Error: <what went wrong>
  <suggestion or hint>
```

**Examples**:
```python
# ✅ GOOD
raise TaskValidationError("Title is required")

# ✅ GOOD
raise TaskNotFoundError(f"Task with ID {task_id} not found")

# ❌ BAD - Too technical
raise ValueError("NoneType object has no attribute 'title'")

# ❌ BAD - Not helpful
raise Exception("Error")
```

### Section 7.3: Input Validation (MANDATORY)

#### 7.3.1 Validation Layers

**Presentation Layer**:
- Validate command syntax
- Validate argument types
- Validate argument presence

**Domain Layer**:
- Validate business rules
- Validate entity constraints
- Validate value object states

**Application Layer**:
- Validate use case preconditions
- Validate entity existence

#### 7.3.2 Validation Rules

**Task Title**:
- NOT empty
- NOT whitespace-only
- Maximum 200 characters
- Must be string type

**Task Description**:
- Can be empty
- Maximum 1000 characters
- Must be string type

**Task ID**:
- Must be positive integer
- Must exist in repository (application layer check)

### Section 7.4: Never Crash Policy (ABSOLUTE)

- Application MUST NEVER crash on user input
- All exceptions MUST be caught at presentation layer
- Display error message and return to prompt
- Log errors if logging is implemented (future phase)

---

## Article VIII: Testing Requirements

### Section 8.1: Testing Strategy (Future Implementation)

**Test Pyramid**:
```
        /\
       /  \   E2E Tests (10%)
      /____\
     /      \  Integration Tests (30%)
    /________\
   /          \ Unit Tests (60%)
  /____________\
```

### Section 8.2: Unit Testing Standards

#### 8.2.1 Coverage Requirements
- Domain layer: **100% coverage** (MANDATORY)
- Application layer: **95%+ coverage**
- Infrastructure layer: **90%+ coverage**
- Presentation layer: **80%+ coverage**

#### 8.2.2 Test File Naming
```
tests/
├── unit/
│   ├── domain/
│   │   ├── test_task.py
│   │   └── test_task_status.py
│   └── application/
│       └── test_add_task_use_case.py
```

#### 8.2.3 Test Method Naming
```python
def test_<method>_<scenario>_<expected_result>():
    """Test <what is being tested>."""
    pass

# Examples:
def test_add_task_valid_input_creates_task():
    """Test that add_task creates task with valid input."""

def test_add_task_empty_title_raises_validation_error():
    """Test that add_task raises error with empty title."""
```

### Section 8.3: Integration Testing

**Scope**: Test layer interactions

**Examples**:
- Repository + Use Case integration
- Handler + Use Case integration
- Full command execution flow

### Section 8.4: E2E Testing

**Scope**: Full CLI interaction simulation

**Method**: Automated input/output testing

### Section 8.5: Manual Testing (Phase 1)

**Required Before Each Commit**:
1. Test all commands with valid input
2. Test all commands with invalid input
3. Test error handling
4. Test edge cases
5. Verify output formatting

---

## Article IX: Documentation Standards

### Section 9.1: Required Documentation Files

#### 9.1.1 README.md (MANDATORY)
**Location**: Root directory

**Must Include**:
- Project overview
- Quick start guide
- Features list
- Installation instructions
- Usage examples
- Architecture overview
- Project structure
- Contributing guidelines
- License information

#### 9.1.2 CLAUDE.md (MANDATORY)
**Location**: Root directory

**Must Include**:
- AI tool used (Claude Code)
- Methodology (Spec-Kit Plus)
- Development process
- Code generation workflow
- Hackathon compliance
- Reproducibility instructions
- Benefits and limitations

#### 9.1.3 CONSTITUTION.md (This File - MANDATORY)
**Location**: Root directory

**Purpose**: Supreme governance document

#### 9.1.4 Specification Files (MANDATORY)
**Location**: `specs/` directory

**Required Files**:
- `functional_spec.md`: User stories, requirements
- `architecture_spec.md`: Technical architecture
- `cli_flow_spec.md`: User interaction flows

### Section 9.2: Code Documentation

#### 9.2.1 Inline Documentation
- Module docstrings: **MANDATORY**
- Class docstrings: **MANDATORY**
- Public method docstrings: **MANDATORY**
- Private method docstrings: **RECOMMENDED**
- Inline comments: **As needed** (explain WHY, not WHAT)

#### 9.2.2 Documentation Style
- Use Google-style docstrings
- Include type hints in addition to docstrings
- Provide examples where helpful

### Section 9.3: Documentation Maintenance

#### 9.3.1 Synchronization Requirement
- Documentation MUST stay in sync with code
- Update docs BEFORE committing code changes
- Specification changes trigger code regeneration

#### 9.3.2 Version History
- Track documentation versions
- Maintain document control tables
- Record authorship and change history

---

## Article X: Security and Data Privacy

### Section 10.1: Phase 1 Security Scope

**Current State**:
- No authentication required
- No authorization required
- No sensitive data stored
- No network communication
- No file system access (Phase 1)

**Implications**: Minimal security requirements for Phase 1

### Section 10.2: Input Validation (Security Perspective)

#### 10.2.1 Input Sanitization
- Validate ALL user input
- Enforce length limits to prevent memory issues
- Use type checking to prevent injection

#### 10.2.2 Injection Prevention
- No SQL (in-memory only)
- No command injection (CLI is safe)
- No code execution from user input

### Section 10.3: Future Security Considerations (Phase 2+)

**File Persistence (Phase 2)**:
- Validate file paths
- Prevent directory traversal
- Set appropriate file permissions
- Handle file access errors gracefully

**Database (Phase 3)**:
- Use parameterized queries (prevent SQL injection)
- Implement proper authentication
- Encrypt sensitive data
- Use prepared statements

**API/Web (Phase 4)**:
- Implement authentication (OAuth, JWT)
- Use HTTPS only
- Implement CSRF protection
- Rate limiting
- Input validation at API layer

---

## Article XI: Performance and Optimization

### Section 11.1: Performance Requirements (Phase 1)

**Expected Performance**:

| Operation | Time Complexity | Expected Time | Acceptable |
|-----------|----------------|---------------|------------|
| Add Task | O(1) | < 1ms | < 10ms |
| Get by ID | O(1) | < 1ms | < 10ms |
| List All | O(n) | < 10ms @ 1000 tasks | < 100ms |
| Update Task | O(1) | < 1ms | < 10ms |
| Delete Task | O(1) | < 1ms | < 10ms |

### Section 11.2: Optimization Policy

#### 11.2.1 Premature Optimization (FORBIDDEN)
- "Premature optimization is the root of all evil" - Donald Knuth
- Do NOT optimize without measurements
- Prioritize code clarity over micro-optimizations

#### 11.2.2 When to Optimize
1. Identify performance issue
2. Measure and profile
3. Optimize the bottleneck
4. Measure improvement
5. Document optimization

### Section 11.3: Memory Management (Phase 1)

**Constraints**:
- Expected: < 1000 tasks per session
- Average task size: ~500 bytes
- Total memory: < 1 MB for task data
- No memory optimization needed for Phase 1

**Data Structure**: `Dict[int, Task]` provides O(1) lookups

### Section 11.4: Scalability Considerations (Future)

**Phase 2 (File Storage)**:
- Lazy loading
- Partial reads
- Indexing for search

**Phase 3 (Database)**:
- Query optimization
- Indexing strategies
- Connection pooling
- Caching layer

---

## Article XII: Version Control and Git Workflow

### Section 12.1: Git Repository Rules

#### 12.1.1 Branch Strategy (Phase 1)
- **main/master**: Production-ready code
- **feature/***: Feature development (future)
- **bugfix/***: Bug fixes (future)

**Phase 1 Exception**: Direct commits to main allowed (single developer)

#### 12.1.2 Commit Message Standards

**Format**:
```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example**:
```
feat: add menu-driven CLI interface

Implemented numbered menu (1-8) with interactive prompts.
Users can now choose between menu-driven and command-based modes.

Closes #15
```

#### 12.1.3 Commit Frequency
- Commit early, commit often
- Each commit should be a logical unit
- Don't commit broken code

### Section 12.2: .gitignore Rules

**Must Ignore**:
```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python

# Virtual environments
.venv/
venv/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# Claude Code
.claude/

# OS
.DS_Store
Thumbs.db

# Build
build/
dist/
*.egg-info/
```

### Section 12.3: Version Tagging

**Semantic Versioning**: `MAJOR.MINOR.PATCH`

**Phase Mapping**:
- Phase 1 (In-Memory): `1.0.0` - `1.x.x`
- Phase 2 (File Storage): `2.0.0` - `2.x.x`
- Phase 3 (Database): `3.0.0` - `3.x.x`
- Phase 4 (Advanced): `4.0.0` - `4.x.x`

---

## Article XIII: Dependency Management

### Section 13.1: Phase 1 Dependency Policy (ABSOLUTE)

**Zero External Dependencies** (MANDATORY)

**Allowed**:
- Python 3.13+ standard library ONLY

**Forbidden**:
- Third-party packages
- External libraries
- Framework dependencies

**Rationale**:
1. Simplicity
2. Educational value
3. Portability
4. Beginner-friendly

### Section 13.2: UV Package Manager

**Tool**: UV (https://github.com/astral-sh/uv)

**Usage**:
```bash
# Initialize project
uv init

# Sync dependencies (none in Phase 1)
uv sync

# Run application
uv run python -m src.main
```

### Section 13.3: Future Phase Dependencies

**Phase 2 (File Storage)**:
- Python stdlib only (json, pathlib)

**Phase 3 (Database)**:
- SQLite (stdlib - sqlite3)
- OR: SQLAlchemy (if needed)

**Phase 4 (Advanced)**:
- To be determined based on features

### Section 13.4: Dependency Review Process

**Before Adding Any Dependency**:
1. Justify necessity
2. Evaluate alternatives
3. Check license compatibility
4. Assess maintenance status
5. Consider bundle size
6. Document decision

---

## Article XIV: AI Usage and Code Generation

### Section 14.1: Official AI Tool

**Tool**: Claude Code (Anthropic)
**Model**: Claude Sonnet 4.5 (or latest)

**Status**: Official development assistant

### Section 14.2: AI Usage Transparency (MANDATORY)

#### 14.2.1 Documentation Requirements
- ALL AI-generated code MUST be documented in CLAUDE.md
- Methodology (Spec-Kit Plus) MUST be described
- Workflow MUST be reproducible

#### 14.2.2 Disclosure Policy
- Full transparency in hackathons and public repositories
- AI usage is a feature, not a secret
- Human oversight and approval required

### Section 14.3: AI Code Generation Workflow

**Process**:
```
1. Human writes specifications (specs/ folder)
   ↓
2. Human reviews and approves specifications
   ↓
3. Claude Code reads specifications
   ↓
4. Claude Code generates code following this Constitution
   ↓
5. Human reviews generated code
   ↓
6. Human tests functionality
   ↓
7. Human approves or requests regeneration
   ↓
8. Code committed to repository
```

### Section 14.4: Human Supervision Requirements

**Humans MUST**:
1. Write all specifications
2. Review all generated code
3. Test all functionality
4. Approve all commits
5. Make architectural decisions
6. Define acceptance criteria

**AI MUST NOT**:
1. Make architectural decisions independently
2. Define requirements
3. Commit code without human approval
4. Change specifications unilaterally

### Section 14.5: Quality Assurance for AI-Generated Code

#### 14.5.1 Review Checklist
- [ ] Code follows Clean Architecture
- [ ] Code adheres to this Constitution
- [ ] Code matches specifications
- [ ] Type hints present
- [ ] Docstrings complete
- [ ] No forbidden patterns used
- [ ] Error handling implemented
- [ ] Naming conventions followed

#### 14.5.2 Testing Requirements
- All AI-generated code MUST be tested
- Manual testing required for Phase 1
- Automated testing required for future phases

### Section 14.6: AI Limitations and Human Responsibility

**AI Can**:
- Generate boilerplate code
- Apply consistent patterns
- Write comprehensive documentation
- Implement specifications accurately

**AI Cannot** (Human Required):
- Understand business context
- Make strategic decisions
- Determine user needs
- Validate real-world applicability
- Make judgment calls

---

## Article XV: Phase Management and Evolution

### Section 15.1: Phase Definitions

#### Phase 1: In-Memory Task Manager (CURRENT)
**Status**: Active Development
**Storage**: In-memory (dictionary)
**Scope**:
- CRUD operations
- Task status management
- CLI interface (menu-driven + command-based)
- Clean Architecture implementation

**Completion Criteria**:
- All specs implemented
- Manual testing passed
- Documentation complete
- Code reviewed and approved

#### Phase 2: File Persistence
**Status**: Planned
**Storage**: JSON file on disk
**Changes**:
- Add `FileTaskRepository` in infrastructure/
- NO changes to domain/application layers
- Update composition root (main.py)
- Add file path configuration

**Architecture Validation**: If domain/application unchanged, architecture is proven

#### Phase 3: Database Storage
**Status**: Planned
**Storage**: SQLite database
**Changes**:
- Add `DatabaseTaskRepository` in infrastructure/
- Add database models/migrations
- NO changes to domain/application layers
- Add database configuration

#### Phase 4: Advanced Features
**Status**: Conceptual
**Features**:
- Task prioritization
- Due dates and reminders
- Categories and tags
- Search and filtering
- Export/Import
- Multi-user support (potential)

### Section 15.2: Phase Transition Rules

#### 15.2.1 Architecture Immutability Test
When transitioning phases:
- Domain layer MUST remain unchanged
- Application layer MUST remain unchanged
- Only infrastructure and composition root may change

**If domain/application require changes**: Architecture has FAILED

#### 15.2.2 Backward Compatibility
- Each phase SHOULD maintain backward compatibility where possible
- Breaking changes require major version bump
- Migration guides required for breaking changes

### Section 15.3: Extensibility Principles

#### 15.3.1 Design for Extension
- Use interfaces to abstract external concerns
- Keep domain logic independent of infrastructure
- Make infrastructure swappable

#### 15.3.2 Open/Closed Principle
- Open for extension (new features, new storage)
- Closed for modification (stable core)

---

## Article XVI: Contribution Guidelines

### Section 16.1: Contributor Requirements

#### 16.1.1 Before Contributing
1. Read this Constitution in full
2. Read README.md and CLAUDE.md
3. Review specification documents
4. Understand Clean Architecture
5. Understand Spec-Kit Plus methodology

#### 16.1.2 Contribution Process
```
1. Identify issue or feature need
   ↓
2. Write or update specifications
   ↓
3. Submit specification for review
   ↓
4. Specification approved
   ↓
5. Generate code from specification (Claude Code)
   ↓
6. Review generated code
   ↓
7. Test functionality
   ↓
8. Submit pull request
   ↓
9. Code review
   ↓
10. Approval and merge
```

### Section 16.2: Code Review Standards

#### 16.2.1 Review Checklist
**Architecture**:
- [ ] Follows Clean Architecture
- [ ] Layer separation maintained
- [ ] Dependency Rule followed
- [ ] No circular dependencies

**Code Quality**:
- [ ] Follows naming conventions
- [ ] Type hints present
- [ ] Docstrings complete
- [ ] No forbidden patterns

**Testing**:
- [ ] Manual testing completed
- [ ] All commands work
- [ ] Error handling tested
- [ ] Edge cases covered

**Documentation**:
- [ ] Specifications updated
- [ ] README.md updated if needed
- [ ] Docstrings added
- [ ] Comments added where needed

#### 16.2.2 Approval Requirements
- One reviewer minimum (Phase 1)
- Two reviewers for architecture changes
- All CI checks passed (future)
- Documentation approved

### Section 16.3: Issue Reporting

**Bug Reports Must Include**:
1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Python version
5. Operating system

**Feature Requests Must Include**:
1. User story
2. Acceptance criteria
3. Proposed specification (optional)
4. Justification

---

## Article XVII: Amendment Process

### Section 17.1: Amendment Authority

This Constitution may be amended by:
1. Project maintainer(s)
2. Community consensus (future)
3. Formal vote (if governance structure established)

### Section 17.2: Amendment Procedure

#### 17.2.1 Proposal Phase
1. Draft amendment
2. Provide rationale
3. Submit for review
4. Public comment period (if applicable)

#### 17.2.2 Review Phase
1. Technical review
2. Community discussion
3. Impact analysis
4. Vote or maintainer decision

#### 17.2.3 Adoption Phase
1. Approval granted
2. Constitution updated
3. Version incremented
4. Announcement published
5. Transition period (if needed)

### Section 17.3: Version Control

**Constitution Versioning**:
- **Major**: Fundamental changes to principles
- **Minor**: New rules or significant clarifications
- **Patch**: Typo fixes, minor clarifications

**Current Version**: 1.0

### Section 17.4: Non-Amendable Provisions

The following provisions are IMMUTABLE and cannot be amended:

1. **Clean Architecture Requirement** (Article III)
2. **Specification-First Methodology** (Article II, Section 2.1)
3. **The Dependency Rule** (Article III, Section 3.1.1)
4. **AI Transparency Requirement** (Article XIV, Section 14.2)

**Rationale**: These are foundational to the project's identity

---

## Appendix A: Glossary

**Clean Architecture**: Architectural pattern emphasizing layer separation and dependency inversion

**Claude Code**: Anthropic's AI-powered software development assistant

**Composition Root**: Single location where all dependencies are wired together (main.py)

**Dependency Injection**: Design pattern where dependencies are passed to constructors

**Dependency Rule**: Inner layers must not know about outer layers

**Domain Layer**: Core business logic and entities (innermost layer)

**Entity**: Object with identity (e.g., Task)

**Infrastructure Layer**: External concerns (storage, I/O)

**Repository Pattern**: Abstraction for data access

**Spec-Kit Plus**: Specification-driven development methodology with AI assistance

**Use Case**: Single business operation encapsulated in a class

**Value Object**: Object without identity (e.g., TaskStatus)

**YAGNI**: "You Aren't Gonna Need It" - avoid premature features

---

## Appendix B: Decision Records

### DR-001: Python 3.13+ Requirement
**Date**: 2025-12-26
**Decision**: Require Python 3.13 or higher
**Rationale**: Latest features, improved type hinting, better performance
**Status**: Approved

### DR-002: Zero External Dependencies (Phase 1)
**Date**: 2025-12-26
**Decision**: Use only Python standard library for Phase 1
**Rationale**: Simplicity, educational value, portability
**Status**: Approved

### DR-003: UV Package Manager
**Date**: 2025-12-26
**Decision**: Use UV for package management
**Rationale**: Modern, fast, professional standard
**Status**: Approved

### DR-004: Clean Architecture Pattern
**Date**: 2025-12-26
**Decision**: Implement Clean Architecture with strict layer separation
**Rationale**: Testability, maintainability, extensibility, educational value
**Status**: Approved - IMMUTABLE

### DR-005: Spec-Kit Plus Methodology
**Date**: 2025-12-26
**Decision**: Follow specification-driven development with AI assistance
**Rationale**: Quality by design, reproducibility, rapid development
**Status**: Approved - IMMUTABLE

### DR-006: Menu-Driven CLI Interface
**Date**: 2025-12-26
**Decision**: Implement menu-driven interface (numbered options 1-8)
**Rationale**: Beginner-friendly, discoverability, guided experience
**Status**: Approved

### DR-007: In-Memory Storage (Phase 1)
**Date**: 2025-12-26
**Decision**: Use dictionary-based in-memory storage for Phase 1
**Rationale**: Simplicity, focus on architecture, foundation for future phases
**Status**: Approved

---

## Constitution Ratification

This Constitution is hereby adopted and ratified as the supreme governance document for the Todo CLI project.

**Effective Date**: January 2, 2026
**Version**: 1.0
**Authority**: Project Maintainer(s)

**Signature Block**:
```
_________________________
Claude Probe (Constitution Author)
Software Architect & Governance Engineer

Date: January 2, 2026
```

---

## End of Constitution

**Final Note**: This Constitution serves as the authoritative guide for all development activities. All contributors, maintainers, and AI assistants MUST adhere to the principles and rules set forth herein. When in doubt, consult this Constitution first.

**Questions or Clarifications**: Open an issue in the repository for Constitution interpretation or amendment proposals.

**Long Live Clean Architecture!** 🏛️
