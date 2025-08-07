// import Header from './Header'
// import Sidebar from './Sidebar'

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen flex bg-white text-gray-900">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Header />
//         <main className="flex-1 p-4 md:p-6">{children}</main>
//       </div>
//     </div>
//   )
// }

import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return(
    <div className='min-h-screen bg-white px-12'>
          <Header />
    </div>

  )
}