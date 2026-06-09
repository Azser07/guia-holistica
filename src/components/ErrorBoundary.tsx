import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary capturó:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="error-boundary">
          <p className="error-title">Error al cargar la aplicación</p>
          <p className="error-message">
            {this.state.error?.message || 'Error desconocido'}
          </p>
          <button
            autoFocus
            className="link-btn error-retry-btn"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
