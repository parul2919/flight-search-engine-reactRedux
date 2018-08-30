import { css } from 'styled-components';


export default css`
.modal-window {
	position: relative;
	&.open {
		.modal-window-overlay {
			display: block;
			transform:scale3d(1, 1, 1);
		}
		.modal-window-in {
			box-shadow: 0 8px 14px 0 $black_38;
		}
	}
	&.top-side {
		.modal-window-in {
			top: 0;
			transform: translate3d(0, -130%, 0);
			margin: auto;
		}
		&.open .modal-window-in {
			transform: translate3d(0, 20%, 0);
		}
	}
}
.modal-window-overlay {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 95;
	background: rgba(0,0,0,.3);
	width: 100%;
	height: 100%;
	transform:translate3d(0, 0, 0);
	display: none;
	transition:transform 0.5s cubic-bezier(0.22, 0.99, 0.68, 0.98);
}
.modal-window-in {
	position: fixed;
	left: 0;
	right: 0;
	z-index: 96;
	background: #fff;
	min-width: 224px;
	transition:transform 0.5s cubic-bezier(0.22, 0.99, 0.68, 0.98);
	.sd-loader{
		position: absolute;
	    width: 100%;
	    height: 100%;
	    	img{
	    		top: 0;
			    bottom: 0;
			    left: 0;
			    margin: auto;
			    right: 0;
			    position: absolute;
	    	}
	}
}
.bigwidth {
	.modal-window-overlay {
		background:rgba(0,0,0,0.6);
	}
	.modal-window-in {
		width: 35%;
		height: auto;
	}
	&.open {
		.modal-window-in {
			box-shadow: 0 5px 5px 0 #999;
		}
	}
	.modal-window-in>.close {
		position: absolute;
	}
}
.close {
	opacity:1;
	color:#333;
	float: right;
	font-size: 15px;
	position: relative;
	z-index: 1;
	text-align: center;
	line-height: 16px;
	border-radius: 50%;
	top:20px;
	right:10px;
	padding: 9px;
	box-sizing:border-box;
	cursor:pointer;
}

.modal-window-in .modal-window-in-heading{
	border-bottom: 1px solid #999;
	height: 56px;
}
.modal-window-in .modal-window-in-heading h3{
	font-size: 22px;
	padding: 15px;
	margin-left: 20px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 92%;
}
.modal-window-in-content{ 
	width:100%; 
	height:95%; 
	position:relative;
	overflow-y: auto;
	background-color: #fff;
}`;