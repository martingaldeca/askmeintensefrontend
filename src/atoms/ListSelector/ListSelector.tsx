import { Category, Level } from '@/app/lib/client';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory, setSelectedLevel } from '@/store/slices/gameOptionsSlice';
import { ListSelectorButtonStyled, ListSelectorStyled } from '@/atoms/ListSelector/ListSelector.styles';

export type ListSelectorProps = {
  items: Category[] | Level[] | null;
  buttonText: string;
  type: 'category' | 'level';
};

const ListSelector = (props: ListSelectorProps) => {
  const [selectedText, setSelectedText] = useState(props.buttonText);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (newValue?: Category | Level) => {
    if (newValue) {
      if (props.type === 'category') {
        setSelectedText(newValue.name);
        dispatch(setSelectedCategory(newValue.uuid));
      } else if (props.type === 'level') {
        const castedValue = newValue as Level;
        setSelectedText(`${castedValue.number} - ${castedValue.name}`);
        dispatch(setSelectedLevel(castedValue.uuid));
      }
    }
    setAnchorEl(null);
  };

  return (
    <ListSelectorStyled>
      <ListSelectorButtonStyled variant="contained" onClick={handleOpenMenu}>
        {selectedText}
      </ListSelectorButtonStyled>

      <Menu anchorEl={anchorEl} open={open} onClose={() => handleCloseMenu()}>
        {props.items?.map(item => (
          <MenuItem key={item.uuid} onClick={() => handleCloseMenu(item)}>
            {'number' in item ? `${item.number} - ${item.name}` : item.name}
          </MenuItem>
        ))}
      </Menu>
    </ListSelectorStyled>
  );
};

export default ListSelector;
