import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

const Error = ({ t }) => <p>{t('error-with-status', { statusCode: '404' })}</p>;

export default withTranslation('common')(Error);
