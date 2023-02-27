import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado'

// alguns componentes  podem não exibir a props href,
// utilizamos o passHref para resolver esse problema.

// o Link, não utiliza mais o <a> como children nas últimas versões do Nextjs,
// para que isso seja possível utiliza-se a props legacyBehavior.

// este componente foi criado para fins didáticos, exemplo de como se cria um componente.

export default function Link({children, href, ...props}) {
  return (
    // <NextLink href={href} passHref legacyBehavior>
    //   <a {...props}>{children}</a>
    // </NextLink>
    <NextLink href={href} passHref legacyBehavior>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  );
}