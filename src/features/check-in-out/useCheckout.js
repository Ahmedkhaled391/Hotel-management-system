import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";


export function useCheckout() {
  const queryClient = useQueryClient();
 
  const { mutate: checkout, isPending: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
        isPaid: false,
      }),
    onSuccess: ({ id }) => {
      toast.success(`Booking #${id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      
    },
    onError: () => toast.error("Something went wrong while checking out"),
  });
  return { checkout, isCheckingout };
}
