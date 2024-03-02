import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';

const CustomSearchInput = styled(TextField)({
	width: '60%',
	backgroundColor: 'white',
	borderRadius: 4,
	'& .MuiOutlinedInput-root': {
		height: '40px',
		alignItems: 'center',
	},
	'& .MuiInputBase-input': {
		height: '40px',
		padding: '0 14px',
	},
});

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
	return (
		<CustomSearchInput
			placeholder={placeholder}
			variant='outlined'
			InputProps={{
				endAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchInput;
