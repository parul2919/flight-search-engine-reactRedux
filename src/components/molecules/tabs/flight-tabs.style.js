//using styled component to write css
import { css } from 'styled-components';


export default css`
.tabs {
    list-style:none;
    padding: 0;
    margin-bottom: 5px;
    li{
        display:inline;
        border-radius:4px 4px 0 0;
        cursor:pointer;
    }
    .active{
        background:#ccc;
    }
}`;


