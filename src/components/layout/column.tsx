import React from 'react'
interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const Column: React.FC<RowProps> = ({ children, className }) => {
  return <div className={`${className} flex flex-col `}>{children}</div>
}

export default Column
