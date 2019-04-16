import { createSelector } from 'reselect';
import deep from 'deep-get-set';

export const getColorScheme = createSelector(
    state => deep(state, 'home'),
    home => deep(home, 'colorScheme') || {},
);

