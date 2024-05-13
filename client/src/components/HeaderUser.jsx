import Search from 'antd/es/input/Search';
import { BellOutlined, UserOutlined ,ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Dropdown,  Space } from 'antd';
import { useNavigate } from 'react-router-dom';


const onSearch = (value, _e, info) => console.log(info?.source, value);

const HeaderUser = () => {
    const navigate = useNavigate()

    const items = [
        {
          key: '1',
          label: (
            <span onClick={() => navigate("/")}>Tài Khoản</span>
          ),
        },
        {
          key: '2',
          label: (
            <span onClick={() => navigate("/")}>Cài đặt</span>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/auth/login"
            onClick={() => localStorage.clear()}
            >
              Đăng xuất
            </a>
          ),
        },
      ];

    return <div className=" w-screen h-16 flex justify-between items-center border shadow-lg">
        <div>
            <a href="/" >
                <img className=" px-6 my-3" src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png" alt="" />
            </a>
        </div>
            
        <div>
        <Search
      placeholder="Search ..."
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    />
        </div>

        <div className=' w-48 flex justify-between px-6'>
        <div className=' relative top-2'>
        <ShoppingCartOutlined  onClick={() => navigate('/cart')}/>
        <div className=' absolute -top-2 -right-3 w-5 h-5 rounded-full bg-red-600 text-center '>0</div>
        </div>
        <BellOutlined />
        <Space wrap size={16}>
        
        <Space wrap size={16}>
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        // arrow={{
        //   pointAtCenter: true,
        // }}
      >
        <Avatar size="large" 
        icon={<UserOutlined />}
/>

      </Dropdown>
      
    </Space>
    
  </Space>

</Space>
        </div>
    </div>
}

export default HeaderUser;