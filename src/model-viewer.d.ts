// Tipado mínimo del web component <model-viewer> (Google Model Viewer)
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string
        alt?: string
        'camera-controls'?: boolean
        'auto-rotate'?: boolean
        'auto-rotate-delay'?: number
        'rotation-per-second'?: string
        'shadow-intensity'?: string
        exposure?: string
        'camera-orbit'?: string
        'field-of-view'?: string
        'interaction-prompt'?: string
        loading?: string
        reveal?: string
      },
      HTMLElement
    >
  }
}
