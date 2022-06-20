import { ref } from "vue";
const getGlasses = () => {
  const glasses = ref([]);

  const load = async () => {
    console.log("inside load");
    try {
      fetch(
        "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses"
      )
        .then((res) => res.json())
        .then((data) => {glasses.value=data?.glasses });
    } catch (error) {
      console.error(error);
    }
  };

  return { glasses, load };
};
export default getGlasses;
