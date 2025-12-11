-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "targetArea" TEXT[],
    "equipment" TEXT NOT NULL,
    "progression" TEXT NOT NULL,
    "tips" TEXT[],
    "steps" TEXT[],
    "reps" JSONB NOT NULL,
    "commonMistakes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);
