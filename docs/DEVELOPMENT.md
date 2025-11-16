# Development Guide

## Overview
This document provides guidelines and instructions for engineers working on the Bearo Landing project.

## Branch Strategy

### Branch Naming Convention
- Feature branches: `feature/description` or `cursor/description`
- Bug fixes: `fix/description`
- Hotfixes: `hotfix/description`

### Branch Flow
```
feature branch → main (staging) → release (production)
```

1. **Feature Branches**: All development work happens on feature branches
2. **Main Branch**: Represents the staging environment
3. **Release Branch**: Represents the production environment

## Development Workflow

### 1. Starting Work
1. Create a feature branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: your commit message"
   ```

### 2. Creating a Pull Request
1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request targeting `main` branch
3. Fill out the PR template completely
4. Request review from team members

### 3. Review Process
- All PRs require at least one approval before merging
- All CI/CD tests must pass
- Code review feedback must be addressed

### 4. Merging to Main (Staging)
Once your PR is approved and all tests pass:
- Merge the PR into `main`
- The CI/CD pipeline will automatically:
  - Run tests
  - Build the application
  - Deploy to staging environment

### 5. Deploying to Production
To deploy to production:
1. Create a PR from `main` to `release` branch
2. After approval and merge, the production deployment will trigger automatically

## Local Development

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# The app will be available at http://localhost:3000
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Requirements
- All new features must include tests
- Test coverage should be maintained above 80%
- All tests must pass before merging

## Code Style

### TypeScript
- Use TypeScript for all new files
- Follow existing type patterns
- Avoid `any` types when possible

### Styling
- Use Tailwind CSS for styling
- Follow the existing component structure
- Use CSS variables defined in `globals.css` for theming

### Component Structure
```
components/
  ├── features/     # Feature-specific components
  ├── layout/      # Layout components (Header, Footer)
  ├── payments/    # Payment-related components
  ├── ui/          # Reusable UI components
  └── wallet/      # Wallet-related components
```

## CI/CD Pipeline

### Workflow Stages
1. **Test**: Runs on all PRs and pushes to main
   - Linting
   - Build verification
   - Unit tests

2. **Deploy Staging**: Runs on merge to `main`
   - Automatic deployment to staging environment

3. **Deploy Production**: Runs on merge to `release`
   - Automatic deployment to production environment

### Environment Variables
Required environment variables are managed through:
- GitHub Secrets (for CI/CD)
- `.env.local` (for local development)

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Dependency Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Internal Tools
- **Linear**: Project management and issue tracking
- **Notion**: Documentation and knowledge base
- **GitHub**: Code repository and CI/CD

## Getting Help

1. Check existing documentation
2. Search for similar issues in Linear
3. Ask in team chat
4. Create a Linear issue if you find a bug

## Best Practices

1. **Commit Messages**: Use conventional commits format
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `refactor:` for refactoring
   - `test:` for tests

2. **Code Reviews**: Be constructive and respectful
3. **Testing**: Write tests before fixing bugs
4. **Documentation**: Update docs when adding features
5. **Performance**: Consider performance implications of changes

## Security

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Keep dependencies up to date
- Follow security best practices for authentication

