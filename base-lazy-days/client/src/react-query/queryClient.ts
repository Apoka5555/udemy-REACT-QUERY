import { QueryClient, QueryCache } from '@tanstack/react-query';
import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from '../theme';

const toast = createStandaloneToast({ theme });

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const id = 'react-query-error';
  const title =
    error instanceof Error ? error.message : 'error connecting to server';

  /// ////////////////////////////
  // NOTE: no toast.closeAll() //
  /// ////////////////////////////
  toast({ id, title, status: 'error', variant: 'subtle', isClosable: true });
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});
