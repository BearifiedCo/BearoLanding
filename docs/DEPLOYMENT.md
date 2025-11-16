# Deployment Guide

## Overview
This document describes the deployment process for the Bearo Landing application.

## Environments

### Staging (Main Branch)
- **Branch**: `main`
- **URL**: https://bearo-staging.vercel.app (update with actual URL)
- **Purpose**: Testing and QA before production
- **Auto-deploy**: Yes, on merge to main

### Production (Release Branch)
- **Branch**: `release`
- **URL**: https://bearo.app (update with actual URL)
- **Purpose**: Live production environment
- **Auto-deploy**: Yes, on merge to release

## Deployment Process

### Automatic Deployment

#### Staging Deployment
1. Merge approved PR to `main` branch
2. CI/CD pipeline automatically:
   - Runs tests
   - Builds the application
   - Deploys to staging environment
3. Verify deployment at staging URL

#### Production Deployment
1. Create PR from `main` to `release`
2. Get approval from team lead
3. Merge PR to `release` branch
4. CI/CD pipeline automatically:
   - Runs tests
   - Builds the application
   - Deploys to production environment
5. Verify deployment at production URL

### Manual Deployment (Emergency)

If automatic deployment fails:

```bash
# Checkout the branch
git checkout main  # or release

# Pull latest changes
git pull origin main

# Install dependencies
npm ci

# Build
npm run build

# Deploy (update with your deployment command)
# For Vercel:
vercel --prod

# For other platforms, use their CLI
```

## Pre-Deployment Checklist

- [ ] All tests pass locally
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Database migrations (if applicable) are ready
- [ ] Breaking changes documented
- [ ] Rollback plan prepared

## Post-Deployment Verification

### Staging
- [ ] Application loads correctly
- [ ] All features work as expected
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Mobile responsiveness verified

### Production
- [ ] All staging checks completed
- [ ] Monitoring alerts configured
- [ ] Error tracking enabled
- [ ] Analytics verified
- [ ] Team notified of deployment

## Rollback Procedure

If issues are detected after deployment:

1. **Identify the problematic commit**
   ```bash
   git log --oneline
   ```

2. **Revert the commit**
   ```bash
   git revert <commit-hash>
   git push origin main  # or release
   ```

3. **Or rollback to previous version**
   ```bash
   git checkout <previous-commit-hash>
   git push origin main --force  # Use with caution
   ```

4. **Notify team** of rollback

## Environment Variables

### Required Variables
- `NODE_ENV`: Environment (development/staging/production)
- `NEXT_PUBLIC_API_URL`: API endpoint URL
- Additional variables as needed

### Setting Variables

#### Local Development
Create `.env.local`:
```env
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### Staging/Production
Set via deployment platform (Vercel, Railway, etc.) or GitHub Secrets

## Monitoring

### Key Metrics to Monitor
- Application uptime
- Response times
- Error rates
- Build success rate
- Deployment frequency

### Tools
- Application monitoring: (add your tool)
- Error tracking: (add your tool)
- Analytics: (add your tool)

## Troubleshooting

### Deployment Failures

1. **Check CI/CD logs** in GitHub Actions
2. **Verify environment variables** are set correctly
3. **Check build errors** in local environment
4. **Review recent changes** that might cause issues

### Common Issues

#### Build Timeout
- Optimize build process
- Increase timeout in workflow file
- Split large builds into smaller chunks

#### Environment Variable Issues
- Verify all required variables are set
- Check variable names match exactly
- Ensure no typos in values

#### Dependency Issues
- Update `package-lock.json`
- Clear build cache
- Verify Node.js version matches

## Emergency Contacts

- **On-call Engineer**: (add contact)
- **DevOps Team**: (add contact)
- **Team Lead**: (add contact)

## Deployment Schedule

- **Staging**: Continuous (on merge to main)
- **Production**: As needed (requires approval)
- **Hotfixes**: Immediate (with team approval)

## Best Practices

1. **Never deploy on Fridays** (unless critical)
2. **Deploy during low-traffic hours** when possible
3. **Have a rollback plan** ready
4. **Test in staging first** before production
5. **Monitor after deployment** for at least 30 minutes
6. **Document any issues** encountered
7. **Communicate deployments** to the team

