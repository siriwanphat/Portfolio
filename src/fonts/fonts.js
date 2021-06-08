import { createGlobalStyle } from 'styled-components';

import Poppins from './Poppins-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'PoppinsFont';
        src: local('PoppinsFont'),
        url(${Poppins}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
