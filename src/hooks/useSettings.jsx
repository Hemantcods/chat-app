import { useContext } from 'react';
import {SettingsContext} from '../contexts/settingsContexts';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;