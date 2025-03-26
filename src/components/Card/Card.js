

const API_KEY = "7bdUxto0WNboVDWRor3ASZj_q-cMz798enf6SDgId78";
const API_URL = "https://api.unsplash.com/search/photos"


export const displayPhotos = async (query , perPage = 15) => {
    const gallery = document.querySelector(".gallery");     
    try {
      const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}&per_page=${perPage}`);
      const data = await response.json();
      console.log(data);
      
      const photos = data.results;
  
      if (photos.length === 0) {
        gallery.innerHTML = '<p>Please try a different word, for example: Cats</p>';
        return displayPhotos("cats", 4);
      }
  
      photos.forEach(photo => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        const mainImg = document.createElement("img");
        mainImg.src = photo.urls.small;
        mainImg.alt = photo.description || "Image from Unsplash";
        mainImg.classList.add("mainImg");

        /*const buttons = document.createElement("div");
        buttons.classList.add("photoButtons");*/
        const photoButton = document.createElement("button");
        photoButton.classList.add("photoButton");
        const likeButton = document.createElement("button");
        likeButton.classList.add("likeButton");
        const visitButton = document.createElement("button");
        visitButton.classList.add("visitButton");
        photoButton.textContent = `+${photo.user.total_photos}`;
        likeButton.textContent = photo.likes;
        visitButton.textContent = "Visit";
        photoDiv.append(mainImg,photoButton,likeButton,visitButton)


        const profile = document.createElement("div");
        profile.classList.add("profile");
        const profileImg = document.createElement("img");
        profileImg.classList.add("profileImage");
        profileImg.src = photo.user.profile_image.large;
        profileImg.alt = "Profile picture";
        const profileH2 = document.createElement("h2");
        profileH2.textContent = photo.user.name;
        const profileH3 = document.createElement("h3");
        profileH3.textContent = new Date(photo.created_at).toLocaleDateString();

        profile.append(profileImg, profileH2, profileH3)
  
        
        card.append(photoDiv, profile);
        gallery.append(card);
      });
    } catch (error) {
      console.error('Error fetching photos from Unsplash:', error);
      gallery.innerHTML = '<p>Please try a different word, for example: Cats</p>';
    }
  };




