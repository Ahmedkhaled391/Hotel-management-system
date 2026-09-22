import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: (data,bookingId) => {
      toast.success(`Booking #${bookingId} successfully Deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () =>
      toast.error("Something went wrong while Deleting the booking"),
  });
  return { deleteBooking, isDeleting };
}
