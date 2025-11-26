import { AtButton } from "@components/atoms/AtButton";
import { AtNumberField } from "@components/atoms/AtNumberField";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export interface MlBidFormProps {
  onSubmit: (bid: number) => void;
  minBid: number;
  className?: string;
}

export const MlBidForm = ({
  onSubmit,
  minBid,
  className = "",
}: MlBidFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
    trigger,
  } = useForm<{ bid: number }>();

  const isInitialMount = useRef(true);

  // Re-validate when minBid changes (skip initial mount and untouched fields)
  // biome-ignore lint: minBid can change outside of component from other users
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (touchedFields.bid) {
      trigger("bid");
    }
  }, [minBid, trigger, touchedFields.bid]);

  const handleFormSubmit = (data: { bid: number }) => {
    onSubmit(data.bid);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`flex flex-col gap-6 w-72 place-items-center ${className}`}
    >
      <AtNumberField
        label="Your Bid (CAD):"
        placeholder="Enter your bid"
        registration={register("bid", {
          required: "Kindly enter your Bid.",
          min: { value: minBid, message: "You need to beat the current bid." },
          valueAsNumber: true,
        })}
        error={errors.bid?.message as string}
      />
      <AtButton type="submit" ariaLabel="submit button" onClick={() => {}}>
        Submit Bid
      </AtButton>
    </form>
  );
};
