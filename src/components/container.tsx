import { Card, CardContent } from "@/components/ui/card";
import React from "react";
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  const Container: React.FC<ContainerProps> = ({ children, className,  }) => {
  return (
    <Card className={className}>
      <CardContent >
        {children}
      </CardContent>
    </Card>
  );
};

export default Container;
