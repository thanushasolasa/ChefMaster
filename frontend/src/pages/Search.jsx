import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/header/Card';

const Search = () => {
    const searchText = useParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch the query parameter from URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    // Fetch items based on the search query
    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/items', {
                    params: { q: query }
                });
                console.log(response.data); // For debugging
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchItems();
        }
    }, [query]);

    // Handle search input changes
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
            <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-500'/>
                <input
                    className='outline-none w-full placeholder:text-[#1b2629] rounded-xl'
                    name='query'
                    type='search'
                    placeholder='Search for a recipe'
                    id='search'
                    value={query}
                    onChange={handleSearch}
                    required=''
                />
            </div>
            {error && <div>Unknown Error Happens...</div>}
            <ul className='mt-20 flex flex-wrap gap-8'>
                {
                    results && results.map((item) => (
                        <li key={item._id} className='flex-shrink-0 w-80'>
                            <Card item={item} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Search;
