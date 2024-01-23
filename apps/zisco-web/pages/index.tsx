import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import {
  usePreferredLanguage,
  useSwapPreferredLanguage,
} from '../utils/contexts/language/LanguageContextProvider';

export function Index() {
  const { formatMessage } = useIntl();
  const swapLanguage = useSwapPreferredLanguage();
  const al = usePreferredLanguage();
  return (
    <Box>
      <Typography>hello</Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => swapLanguage(al === 'en' ? 'fr' : 'en')}
      >
        {formatMessage({ id: 'en' })}
        {al}
      </Button>
    </Box>
  );
}

export default Index;
