import { Badge, Tooltip } from 'antd';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { MovieContext } from './MovieContext';

const Navigation = () => {
    const { watchlistCount } = useContext(MovieContext);

    return (
        <nav>
            <div className='nav_bar'>
                <p>
                    <Link className='a' href='/movies'>Latest Movies</Link>
                </p>
                <p>
                    <Tooltip title='Watchlist' placement='rightTop'>
                        <Badge showZero count={watchlistCount} size="small" overflowCount={9}>
                            <Link className='a' href="/watchlist"><AiFillHeart
                                style={{ color: 'red' }} size={35} /></Link>
                        </Badge>
                    </Tooltip>
                </p>
            </div>
        </nav>
    );
};

export default Navigation;