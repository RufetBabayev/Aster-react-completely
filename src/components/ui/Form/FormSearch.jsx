import { Space, Input, Spin } from "antd";
import { useFetchNewsBySearch } from "@/hooks/useFetch";
import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Search } = Input;

function FormSearch() {
  const [text, setText] = useState("");
  const [searchRes, fetchSearchRes, searchLoading] = useFetchNewsBySearch(
    text.trim()
  );
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const onSearch = (e) => {
    setText(e.target.value);
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const trimmed = text.trim() !== "";
    if (trimmed) {
      fetchSearchRes();
    }
    setIsOpen(trimmed);
  }, [text]);

  return (
    <div className="flex">
      <Space
        className="lg:w-[300px] md:ml-16 md:w-[360px] sm:w-[500px] w-[235px]   flex mb-0"
        direction="vertical"
      >
        <div className="relative">
          <Search placeholder="Axtar..." onChange={(e) => onSearch(e)} />
          {searchLoading && (
            <Spin
              size="small"
              className="absolute top-[8px] right-[10px] dark:bg-gray-600 bg-[#EFF4F3] z-20"
            />
          )}
        </div>
      </Space>
      {isOpen && (
        <ul
          ref={ref}
          className="bg-white rounded-theme mt-1 p-1 absolute  left-13 top-[54px] z-10 border border-gray-400 divide-y divide-gray-200 text-[14px] w-[235px] sm:w-[500px] 
          md:w-[360px] md:left-[71px] lg:w-[300px] lg:left-13 darkMode"
        >
          {searchRes.length > 0 ? (
            searchRes.map((searchedItem, index) => (
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={`/view/${searchedItem.slug}`}
                  className=" flex justify-between items-center"
                  key={index}
                >
                  <p className="line-clamp-1">{searchedItem.title}</p>
                  <figure className="size-[34px] m-1 shrink-0">
                    <img
                      className="img-cover rounded-sm"
                      src={searchedItem.photo}
                      alt="searchbarPhoto"
                    />
                  </figure>
                </Link>
              </li>
            ))
          ) : (
            <li className="text-red-500 w-[355px]">
              Axtardığınız xəbər tapılmadı...
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default FormSearch;
