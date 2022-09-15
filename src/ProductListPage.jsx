import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Head from './Head';
import NoMaching from './NoMaching'
import Footer from './Footer';
import Button from './Button';
import { getProductList } from './Api';
import Loading from './Loading';

function ProductListPage() {
	const [query, setQuery] = useState('');

	const [sort, setSort] = useState('Default');

	const [ApiProduct, useApiProduct] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(function() {
    
	const promis = getProductList();
    
 promis.then(function(products) {
			useApiProduct(products);
			setLoading(false);
		})
	}, []);

	let data = ApiProduct.filter(function(item) {
		const lowerCaseTitle = item.title.toLowerCase();

		const lowerCaseQuery = query.toLowerCase();

		return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
	});

	if (sort == 'price') {
		data.sort(function(x, y) {
			return y.price - x.price;
		});
	} else if (sort == 'priceLow') {
		data.sort(function(x, y) {
			return x.price - y.price;
		});
	} else if (sort == 'title') {
		data.sort(function(x, y) {
			return x.title < y.title ? -1 : 1;
		});
	}
	function handleChangeQuery(event) {
		setQuery(event.target.value);
	}

	function handleChangeSort(event) {
		setSort(event.target.value);
	}

	if (loading) {
		return (<Loading />);
	}
  
  

	return (
		<div>
			<div className="flex  py-10 bg-gradient-to-r from-cyan-200 to-blue-400 justify-end">
				<input
					type="search"
					placeholder="🔎 "
					className="rounded-lg border border-black "
					onChange={handleChangeQuery}
					value={query}
				/>

				<select
	className="w-28 rounded-xl  mx-3"
	onChange={handleChangeSort}
					value={sort}	>
					<option value="Default">Default sort</option>
					<option value="title">sort by title</option>
					<option value="price">sort by price high: to low</option>
					<option value="priceLow">sort by price low: to high</option>
				</select>
			</div>

			<div className="flex p-10 bg-gray-200 justify-center">
				<div className=" my-5 rounded-xl bg-white  p-5  ">
					{data.length > 0 && <ProductList products={data} />}

					{data.length == 0 && (
						<NoMaching/>
					)}
				</div>
			</div>
			<div className="flex justify-center my-5 ">
				<Button title="1" />
				<Button title="2" />
				<Button title="Next" />
			</div>
		</div>
	);
}
export default ProductListPage;
