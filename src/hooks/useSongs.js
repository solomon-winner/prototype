import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSongs, addSongs, updateSong, removeSong } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { songsState, albumsState } from '../state/state.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useSongs = (type) => {
  const setSongs = useSetRecoilState(songsState);
  const setAlbums = useSetRecoilState(albumsState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["songs", type],  // Cache separately for each type
    queryFn: () => fetchSongs(type),
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent unnecessary refetch on window focus
    retry: 2, // Retry twice on failure
  });

  useEffect(() => {
    if (data) {
      if (type === "song") {
        setSongs(data); // Store songs in songsState
      } else if (type === "album") {
        setAlbums(data); // Store albums in albumsState
      }
    }
  }, [data, type, setSongs, setAlbums]);

  useEffect(() => {
    if (isError) {
      console.error("Fetching songs failed:", error.message);
      handleError(error);
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};
