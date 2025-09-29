interface DashboardProps {
  url: string
}

export default function Dashboard({ url }: DashboardProps) {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        style={{ border: 'none', width: '100%', height: '100%' }}
        src={url}
      />
    </div>
  )
}
