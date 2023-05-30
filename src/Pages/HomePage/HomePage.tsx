import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header, LogoTitle, SearchBar, Input, UserIcon, UserCart, SidebarCon, SidebarHeadings, ProductsDiv, SectionDiv } from './HomePageStyle';
import Card from '../../Components/DisplayCard/Card';

interface Products {
  id: number,
  name: string,
  cost: number,
  quantity: number
}

export default function HomePage() {
  const [products, setProducts] = useState<Products[]>([]);
  const navigate = useNavigate();
  const Logout = () => {
    navigate('/');
  }
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((resp) => {
        setProducts(resp);
      })
      .catch((err) => {
        console.log(err);
      });
    return 'Hii'
  };
  console.log(products);
  return (
    <div>
      <Header>
        <LogoTitle>EasyKart</LogoTitle>
        <input style={{ fontSize: '14px', width: '30%', height: '30px', marginTop: '10px' }} name='searchbar' placeholder='Search Products' type='text' />
        <UserCart>Cart</UserCart>
        <UserIcon>User</UserIcon>
      </Header>
      <SectionDiv>
        <SidebarCon>
          <SidebarHeadings>Filters</SidebarHeadings>
          <div>
            <SidebarHeadings>Category</SidebarHeadings>
          </div><div>
            <SidebarHeadings>Cart</SidebarHeadings>
          </div>
        </SidebarCon>
        <ProductsDiv>
          <p>Hiiiii</p>
          {products.map((pro: any) => {
            return <Card prod={pro} />
          })}

        </ProductsDiv>
      </SectionDiv>
    </div>
  )
}

