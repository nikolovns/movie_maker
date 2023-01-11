import axios from "axios"
import React, { useState } from "react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { MovieProps } from "../../types/MovieTypes";

import { zodResolver } from "@hookform/resolvers/zod";
import { array, z } from "zod";
import { Button, Card, CardContent, FormControl, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, StepLabel, TextField } from "@mui/material";

export default function CreateMoviePage(): JSX.Element {

  const [categoryState, setCategoryState] = useState<string[]>([])

  // const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const handleFieldChange = (event: any) => {
    const { target: { value }, } = event;
    setCategoryState(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  // }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = movie => handleSubmitMovieData(movie);

  const handleSubmitMovieData = async (movie: ValidationSchema) => {
    await axios.post(`/api/movie`, { movie: movie })
    setCategoryState([])
    reset()
  }

  return (
    <Card sx={{ width: '300px', marginTop: '30px' }}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
              id="name"
              label="Movie name"
              aria-describedby="movie name"
              required
              {...register("name", { required: true })}
            />
            {errors.name &&
              (<p className="text-xs italic text-red-500 mt-2">{errors.name?.message}</p>)
            }
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
              select
              id="categories"
              label="Category"
              defaultValue={['']}
              sx={{ minWidth: '200px' }}
              value={categoryState}
              SelectProps={{
                multiple: true,
                onChange: handleFieldChange
              }}
              {...register("categories", { required: true })}
            >
              <MenuItem value="film">Film</MenuItem>
              <MenuItem value="series">Series</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>
              <MenuItem value="reality">Reality</MenuItem>
            </TextField>
            {errors.categories &&
              (<p className="text-xs italic text-red-500 mt-2">{errors.categories?.message}</p>)
            }
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
              id="description"
              label="description"
              multiline
              rows={2}
              maxRows={4}
              required
              {...register("description", { required: true })}
            />
            {errors.description &&
              (<p className="text-xs italic text-red-500 mt-2">{errors.description?.message}</p>)
            }
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <TextField
              id="season"
              type="number"
              label="Season"
              required
              {...register("season", { required: false })}
            />
            {errors.season &&
              (<p className="text-xs italic text-red-500 mt-2">{errors.season?.message}</p>)
            }
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <FormLabel htmlFor="release">Release Date</FormLabel>
            <TextField
              id="release"
              type="date"
              {...register('release', { required: true })}
            />
            {errors.release &&
              (<p className="text-xs italic text-red-500 mt-2">{errors.release?.message}</p>)
            }
          </FormControl>
          <div>
            <Button type="submit" >save movie</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

const validationSchema = z.object({
  name: z.string().min(1, { message: "Movie name is required" }),
  categories: z.string().array().min(1, { message: "Category field is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  season: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), { message: 'The season is required' }),
  release: z.string().refine((val) => new Date(val), { message: 'The field is required' })
})

type ValidationSchema = z.infer<typeof validationSchema>;