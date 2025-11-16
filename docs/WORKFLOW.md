# Development Workflow

## Quick Reference

```
Feature Branch → PR → Main (Staging) → Release (Production)
```

## Detailed Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout main
git pull origin main
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/my-feature
```

### 2. Pull Request Process
1. **Create PR** targeting `main` branch
2. **Fill out PR template** completely
3. **Wait for CI checks** to pass:
   - ✅ Linting
   - ✅ Build
   - ✅ Tests
4. **Request review** from team members
5. **Address feedback** and update PR
6. **Get approval** (minimum 1 required)

### 3. Merge to Staging (Main)
Once PR is approved:
- ✅ Merge PR to `main` branch
- 🚀 **Automatic deployment** to staging begins
- ✅ Verify deployment at staging URL

### 4. Deploy to Production (Release)
When ready for production:
1. Create PR from `main` to `release`
2. Get team lead approval
3. Merge to `release` branch
4. 🚀 **Automatic deployment** to production begins

## Branch Protection Rules

### Main Branch
- ✅ Requires PR approval (minimum 1)
- ✅ Requires status checks to pass
- ✅ Requires branches to be up to date
- ✅ No force pushes allowed

### Release Branch
- ✅ Requires PR approval (minimum 1, including team lead)
- ✅ Requires status checks to pass
- ✅ Requires branches to be up to date
- ✅ No force pushes allowed

## CI/CD Pipeline

### On Pull Request
- Runs linting
- Runs build
- Runs tests
- Posts PR comment with deployment info

### On Merge to Main
- Runs all tests
- Builds application
- Deploys to staging automatically

### On Merge to Release
- Runs all tests
- Builds application
- Deploys to production automatically

## Manual Review Process

### Review Checklist
- [ ] Code follows project style guidelines
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] No breaking changes (or documented if needed)
- [ ] Security considerations addressed
- [ ] Performance impact assessed

### Approval Requirements
- **Staging (main)**: 1 approval minimum
- **Production (release)**: 1 approval minimum (including team lead)

## Emergency Procedures

### Hotfix Process
1. Create hotfix branch from `main`
2. Fix the issue
3. Create PR to `main` (expedited review)
4. After merge to `main`, create PR to `release`
5. Deploy to production immediately

### Rollback Process
1. Identify problematic commit
2. Create revert PR
3. Fast-track review and merge
4. Monitor deployment

## Integration with Linear

### Creating Linear Issues
- Link PRs to Linear issues using issue numbers
- Update Linear issue status when PR is merged
- Use Linear for tracking feature progress

### Notion Documentation
- Update relevant Notion pages when adding features
- Document API changes in Notion
- Keep architecture diagrams updated

## Best Practices

1. **Small PRs**: Keep PRs focused and small
2. **Clear commits**: Use conventional commit messages
3. **Test locally**: Always test before pushing
4. **Update docs**: Keep documentation current
5. **Communicate**: Notify team of breaking changes
6. **Monitor**: Watch deployments for issues

## Questions?

- Check [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed development guide
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment procedures
- Ask in team chat or create Linear issue

