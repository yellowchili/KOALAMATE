import {Button, ButtonGroup} from '@mui/material';
import {NavLink} from 'react-router-dom';
import React from 'react';

const MyPageButton = () => {

	return (
			<>
				<ButtonGroup variant="outlined" aria-label="outlined button group"
				             sx={{margin: '10px'}}>
					<Button component={NavLink} to="/user/31/update">프로필 수정</Button>
					<Button component={NavLink} to="/user/31">회원정보 수정</Button>
					<Button component={NavLink} to='/user/31/follower'>팔로우</Button>
					<Button component={NavLink} to='/user/31/followee'>팔로잉</Button>
				</ButtonGroup>
			</>
	);
};
export default MyPageButton;