import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { baseUrl } from '@/components/utils/Urls'
import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { Star, Film, Phone, Play, ArrowLeft } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface Movie {
  _id: string
  film_name: string
  film_image: string
  film_cover: string
  film_trailer?: string
  release_date?: string
  age_rating?: string
  duration?: string
  genre?: string[]
  description?: string
}

const MovieDetail: React.FC = () => {
  const router = useRouter()
  const { movieId } = router.query
  const [movie, setMovie] = useState<Movie | null>(null)
  const [imdbRating, setImdbRating] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Lietuvių')

  const fetchMovieDetails = useCallback(async () => {
    if (!movieId) return

    try {
      setLoading(true)
      setError(null)

      const res = await axios.get<{ movie: Movie }>(
        `${baseUrl}/movies/${movieId}`
      )

      if (!res.data || !res.data.movie) {
        throw new Error('Filmas nerastas')
      }

      const movieData = res.data.movie
      setMovie(movieData)

      try {
        const omdbRes = await axios.get(
          `https://www.omdbapi.com/?t=${encodeURIComponent(movieData.film_name)}&apikey=fd32096c`
        )
        if (omdbRes.data && omdbRes.data.Response !== 'False') {
          setImdbRating(omdbRes.data.imdbRating || 'N/A')
          setMovie(prev => ({
            ...prev!,
            duration: omdbRes.data.Runtime || prev?.duration || 'N/A',
            genre: omdbRes.data.Genre?.split(', ') || prev?.genre || [],
            description: omdbRes.data.Plot || prev?.description || 'Aprašymas nepasiekiamas'
          }))
        }
      } catch (omdbErr) {
        console.error('Error fetching OMDB data:', omdbErr)
      }
    } catch (err) {
      console.error('Error fetching movie details:', err)
      setError(err instanceof Error ? err.message : 'Įvyko klaida')
    } finally {
      setLoading(false)
    }
  }, [movieId])

  useEffect(() => {
    fetchMovieDetails()
  }, [fetchMovieDetails])

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
  }

  const genres = movie?.genre?.join(' - ') || 'Nėra informacijos'
  const releaseYear = movie?.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-100 mt-100">
          <div className="flex flex-col gap-6">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-12 w-2/3 rounded" />
            <Skeleton className="h-36 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-black text-white pt-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-50 text-center">
          <h2 className="text-3xl font-bold mb-4">{error || 'Filmas nerastas'}</h2>
          <Button onClick={() => router.back()} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Grįžti atgal
          </Button>
          <Button onClick={() => fetchMovieDetails()} variant="default" className="bg-red-600 hover:bg-red-700">
            Bandyti dar kartą
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${movie.film_cover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <Button 
          onClick={() => router.back()} 
          variant="ghost" 
          className="absolute top-4 left-4 text-white"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Grįžti
        </Button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold uppercase mb-2">
                {movie.film_name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="px-4 py-2 text-lg bg-red-600 hover:bg-red-700">
                  35
                </Badge>
                <div className="flex flex-wrap gap-4 text-lg">
                  <span className={selectedLanguage === 'Anglų' ? 'text-red-500 font-medium' : ''}>Anglų</span>
                  <span className={selectedLanguage === 'Lietuvių' ? 'text-red-500 font-medium' : ''}>Lietuvių</span>
                  <span className={selectedLanguage === 'Rusų' ? 'text-red-500 font-medium' : ''}>Rusų</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">PASIRINKITE KALBĄ</h3>
              <div className="flex flex-wrap gap-4">
                {['Anglų', 'Lietuvių', 'Rusų'].map(language => (
                  <Button 
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"} 
                    className={`text-lg px-6 py-4 ${selectedLanguage === language ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-8 flex items-center flex-wrap gap-4 text-gray-400">
              <Film className="h-5 w-5" />
              <span>MOD 7.1</span>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <span>{genres}</span>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <span>{releaseYear}</span>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <span>{movie.duration || 'N/A'}</span>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-transparent border-b border-gray-700 rounded-none p-0 h-14">
                {['description', 'comments', 'trailer', 'collections', 'similar', 'actors'].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-red-600 rounded-none h-full"
                  >
                    {{
                      description: 'Aprašymas',
                      comments: 'Komentarai',
                      trailer: 'Anonsas',
                      collections: 'Kolekcijos',
                      similar: 'Panašūs',
                      actors: 'Aktoriai'
                    }[tab]}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="description" className="py-8">
                <p className="text-lg leading-relaxed">{movie.description || 'Aprašymas nepasiekiamas'}</p>
              </TabsContent>

              <TabsContent value="trailer" className="py-8">
                {movie.film_trailer ? (
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <Button asChild variant="ghost" size="lg">
                      <Link href={movie.film_trailer} target="_blank">
                        <Play className="h-8 w-8 mr-2" />
                        Žiūrėti anonsą
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <p className="text-lg text-gray-400">Anonsas nepasiekiamas</p>
                )}
              </TabsContent>
              
              <TabsContent value="comments" className="py-8">
                <p className="text-lg text-gray-400">Komentarų dar nėra</p>
              </TabsContent>
              
              <TabsContent value="collections" className="py-8">
                <p className="text-lg text-gray-400">Kolekcijų nerasta</p>
              </TabsContent>
              
              <TabsContent value="similar" className="py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="border-gray-700 bg-gray-900 hover:border-red-600 transition-colors">
                      <CardContent className="p-0">
                        <div className="aspect-[2/3] bg-gray-800 rounded-lg" />
                      </CardContent>
                      <CardFooter className="p-3">
                        <h3 className="font-medium">Filmo pavadinimas {i}</h3>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="actors" className="py-8">
                <p className="text-lg text-gray-400">Aktorių sąrašas nepasiekiamas</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right */}
          <div className="lg:w-1/4">
            <Card className="border-gray-700 bg-gray-900 sticky top-24">
              <CardContent className="p-0">
                <div className="w-full relative overflow-hidden rounded-t-lg">
                  <img
                    src={movie.film_cover}
                    alt={movie.film_name}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-4 bg-gray-800">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-lg">{imdbRating || 'N/A'}/10</span>
                </div>
                <Badge variant="destructive" className="px-3 py-1 text-lg">
                  {movie.age_rating || '18+'}
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
