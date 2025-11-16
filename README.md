# BearifiedCo - Bearo Payments

A modern multi-chain payment application supporting ApeChain and Solana blockchains.

## Features

- 🐻 Multi-chain support (ApeChain + Solana)
- 💸 Send and receive payments
- 📊 Transaction history
- 💼 Wallet management
- 🎨 Beautiful, responsive UI
- 🔒 Secure wallet integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand + React Context
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── wallet/           # Wallet-related components
│   ├── payments/         # Payment components
│   ├── ui/               # Base UI components
│   └── features/         # Feature components
├── lib/                   # Utilities and logic
│   ├── chains/           # Chain configurations
│   ├── wallet/           # Wallet adapters
│   ├── utils/            # Helper functions
│   └── hooks/            # Custom React hooks
├── contexts/              # React contexts
├── types/                 # TypeScript type definitions
└── public/                # Static assets

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Development Workflow

### Branch Strategy
- **Feature branches** → `main` (staging) → `release` (production)
- All changes require a Pull Request with approval
- CI/CD automatically deploys to staging on merge to `main`
- Production deployments require PR from `main` to `release`

### Quick Start for Developers
1. Create a feature branch from `main`
2. Make your changes
3. Create a PR targeting `main`
4. Get approval and merge
5. Automatic deployment to staging

For detailed information, see:
- [Development Guide](./docs/DEVELOPMENT.md) - Complete development setup and guidelines
- [Workflow Guide](./docs/WORKFLOW.md) - PR and deployment workflow
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deployment procedures

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Pull Requests**: Automatic linting, building, and testing
- **Main Branch**: Auto-deploys to staging environment
- **Release Branch**: Auto-deploys to production environment

See [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) for details.

## License

Private - BearifiedCo

