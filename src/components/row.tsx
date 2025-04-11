import React from 'react'
interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={`${className} flex flex-row `}>{children}</div>
}

export default Row
