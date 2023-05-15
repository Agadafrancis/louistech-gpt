import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Louis GPT ',
  description: 'Created by Agada Francis, CEO Louis Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/**Sidebar */}

          {/**ClientProvider - Notification */}

                    
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
        </body>
    </html>
  )
}
