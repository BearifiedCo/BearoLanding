import Link from 'next/link'
import { APP_NAME, APP_DESCRIPTION } from '@/lib/utils/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00D632] text-white text-xl font-bold">
                B
              </div>
              <span className="text-xl font-bold text-gray-900">
                {APP_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {APP_DESCRIPTION}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/send"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Send Money
                </Link>
              </li>
              <li>
                <Link
                  href="/receive"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Request Money
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#00D632] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} BearifiedCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

