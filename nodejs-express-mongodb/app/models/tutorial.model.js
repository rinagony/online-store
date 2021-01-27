module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "clothe.clotheAll",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };