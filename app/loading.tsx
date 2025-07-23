import { DotLoader } from "@/components/dot-loader"

const dotLoaderFrames = [
  [0, 7, 14, 21, 28, 35, 42], // Diagonal 1
  [1, 8, 15, 22, 29, 36, 43], // Diagonal 2
  [2, 9, 16, 23, 30, 37, 44], // Diagonal 3
  [3, 10, 17, 24, 31, 38, 45], // Diagonal 4 (center)
  [4, 11, 18, 25, 32, 39, 46], // Diagonal 5
  [5, 12, 19, 26, 33, 40, 47], // Diagonal 6
  [6, 13, 20, 27, 34, 41, 48], // Diagonal 7
];

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <div className="flex justify-center">
          <DotLoader frames={dotLoaderFrames} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-zinc-900">Loading...</h2>
          <p className="text-zinc-600">Preparing your experience</p>
        </div>
      </div>
    </div>
  )
}
