import Search from 'antd/es/input/Search';


const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {


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

        <div className=' mr-6'>
        <a href="/auth/signup">Đăng kí</a>
        <span className=' w-1 border mx-2'></span>
        <a href="/auth/login">Đăng nhập</a>

        </div>
    </div>
}

export default Header;