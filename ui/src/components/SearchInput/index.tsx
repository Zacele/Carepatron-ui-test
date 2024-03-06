import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import { useSearch } from '@/contexts/SearchContext';
import { debounce } from '@/utils';

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
	const { setSearchQuery } = useSearch();

	const onInputChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	}, 300);

	return (
		<CustomSearchInput
			placeholder={placeholder}
			variant='outlined'
			onChange={onInputChange}
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
