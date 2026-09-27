import { useInView } from '../../hooks/useInView';

/** Fades its children up once they scroll into view. Supports variants: 'up' (default), 'fade', 'scale', 'left', 'right' */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal={variant === 'up' ? '' : variant}
      className={`${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
