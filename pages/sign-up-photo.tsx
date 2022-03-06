import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getGameCategory } from "../services/player";
import { GameCategory } from "../services/data-types";
import { setSignUp } from "../services/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


export default function SignUpPhoto() {
  const [categoryGame, setCategoryGame] = useState([]);
  const [favorites, setFavorites] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalForm] = useState({
    name : '',
    email:''
  })
  const router = useRouter()

  const GetCategoryGame = useCallback(async () => {
    const data = await getGameCategory();
    setCategoryGame(data);
    setFavorites(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    GetCategoryGame();
  },[]);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form')
    setLocalForm(JSON.parse(getLocalForm!)) //string menjadi object
  },[])
  const onSubmit = async () => {
    console.log("favorites ", favorites);
    console.log("image ", image);
    const getLocalForm = await localStorage.getItem('user-form')
    const form = JSON.parse(getLocalForm!)
    const data = new FormData()

    data.append('image', image)
    data.append('email', form.email)
    data.append('name', form.name)
    data.append('password', form.password)
    data.append('username', form.name)
    data.append('phoneNumber', '085323182016')
    data.append('role', 'user')
    data.append('status', 'Y')
    data.append('favorites', favorites)

    const result = await setSignUp(data)
    if(result.error) {
      toast.error(result.message)
    } else {
      toast.success("Register Berhasil")
      router.push('/sign-up-success')
      localStorage.removeItem('user-form')
    }
    console.log("result ", result);
    

    console.log("data ", data);
    
  };
  return (
    <div>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img
                       className="img-upload"
                          src={imagePreview}
                          alt="upload"
                        />
                      ) : (
                        <Image
                          src="/icon/upload.svg"
                          width={120}
                          height={120}
                          alt="upload"
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        const img = e.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {localForm?.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                {localForm?.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorites}
                    onChange={(e) => setFavorites(e.target.value)}
                  >
                    {/* <option value="" disabled selected>
                      Select Category
                    </option> */}
                   {categoryGame.map((game: GameCategory) => {
                      return (
                        <option key={game._id} value={game._id}>
                          {game.name}
                        </option>
                      );
                    })} 
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  type="button"
                  onClick={onSubmit}
                >
                  Create My Account
                </button>
                <Link href="/">
                  <a
                    className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                    role="button"
                  >
                    Terms & Conditions
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
