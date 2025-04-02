import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CardProps {
  title: string
  description: string
  content: React.ReactNode
}

export function CustomCard({ title, description, content }: CardProps) {
  return (
    <Card className="bg-gray-800 border-green-400 neon-border">
      <CardHeader>
        <CardTitle className="text-green-400">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}

