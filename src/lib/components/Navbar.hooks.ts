type UseDotHookProps = {
  items: number
  activeId?: number
}

export default function useDotAnimation({ items, activeId }: UseDotHookProps) {
  return {
    '--navbar-items': items,
    '--navbar-item-active': activeId ?? '',
  } as React.CSSProperties
}
