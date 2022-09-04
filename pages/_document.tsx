import Document, {DocumentContext, Head} from 'next/document';
import {ServerStyles, createStylesServer} from '@mantine/next';
import {rtlCache} from 'rtl-cache';

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <body dir='rtl'>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </body>
      ),
    };
  }
}
