import { XIcon } from '@heroicons/react/solid'
import MuiModal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Genre, Movie ,Element} from '../typing'

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailor, setTrailor] = useState('')
  const [genres, setGenres] = useState<Genre[]>([])
  const [muted ,setMuted] = useState(false)
  useEffect(() => {
    if (!movie) return
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((res) => res.json())
        .then((data) => {
          if(data?.videos){
            const index =data.videos.results.findIndex((element : Element)=>element.type==='Trailer')
            setTrailor(data?.videos.results[index]?.key)
          
          }
          if (data?.genres) {
            setGenres(data.genres)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchMovie()
  }, [movie])

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          className="modalButton righ-5 absolute top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>


        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailor}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
        muted={muted}
          />
          
        </div>
      </>
    </MuiModal>
  )
}

export default Modal
