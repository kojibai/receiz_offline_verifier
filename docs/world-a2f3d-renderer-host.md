# World A2F3D Renderer Host

This is the concrete deployment path for the profile chat-box twin once the Runpod pod stops being the final renderer and starts delegating to a real native 3D renderer host.

## Why This Exists

The Runpod pod now contains the native session bridge and the in-repo native renderer service, but it still does not contain the actual 3D renderer kernel.

Current truth on the live pod:

- `docker` is missing
- `Audio2Face-3D` is not installed
- the pod still reports `pipeline: "clip-ingress"`
- the active speed lane is still `talking-head-2d`

So the next real step is a dedicated renderer host that can run NVIDIA's Audio2Face-3D stack and a renderer/gateway that turns facial animation output into frames for LiveKit.

## Required External Inputs

You still need to provide:

- NVIDIA / NGC access that can pull `nvcr.io/nim/nvidia/audio2face-3d`
- an `NGC_API_KEY`
- a dedicated host with Docker and NVIDIA Container Toolkit
- the actual renderer or renderer gateway behind the native session contract

Audio2Face-3D helps because it produces 3D facial animation data from streamed audio. It does not, by itself, become the live twin video stream.

## Host Bootstrap

Run this on the dedicated renderer host:

```bash
export RECEIZ_A2F3D_NGC_API_KEY=<ngc-api-key>
export RECEIZ_A2F3D_IMAGE=nvcr.io/nim/nvidia/audio2face-3d:1.3.16
bash /workspace/receiz/scripts/world_a2f3d_host_bootstrap.sh
```

Useful options:

- `RECEIZ_A2F3D_LIST_PROFILES=1`
  - lists supported TRT profiles before launch
- `RECEIZ_A2F3D_MODEL_PROFILE=<profile-id>`
  - pins the deployment to a known profile
- `RECEIZ_A2F3D_STYLIZATION_CONFIG=/abs/path/stylization_config.yaml`
- `RECEIZ_A2F3D_DEPLOYMENT_CONFIG=/abs/path/deployment_config.yaml`
- `RECEIZ_A2F3D_ADVANCED_CONFIG=/abs/path/advanced_config.yaml`

The bootstrap script launches the official Audio2Face-3D NIM container on the host. It does not pretend that this finishes the twin. The host still needs a renderer/gateway that exposes:

- `GET /health`
- `POST /session/start`
- `POST /session/audio-chunk`
- `POST /session/stop`

## Pod Configuration

Once the renderer host exposes the native session HTTP contract, generate the pod env snippet with:

```bash
export RECEIZ_A2F3D_RENDERER_BASE_URL=http://<renderer-host>:<port>
export RECEIZ_A2F3D_RENDERER_AUTH_TOKEN=<renderer-token>
bash /workspace/receiz/scripts/world_runpod_native_renderer_a2f_env.sh
```

Append the printed values to the Runpod pod's `.runpod-render.env`.

The pod-side native renderer service now understands these alias envs directly:

- `RECEIZ_A2F3D_RENDERER_BASE_URL`
- `RECEIZ_A2F3D_RENDERER_AUTH_HEADER`
- `RECEIZ_A2F3D_RENDERER_AUTH_TOKEN`
- `RECEIZ_A2F3D_RENDERER_TIMEOUT_MS`

If `RECEIZ_NATIVE_RENDERER_PROVIDER` is unset and `RECEIZ_A2F3D_RENDERER_BASE_URL` is present, the service now automatically treats the provider as `http`.

## Expected Healthy State

Once the real renderer host is in place, the pod health should flip from clip-ingress into native session:

```json
{
  "rendererCapabilities": {
    "pipeline": "native-session",
    "rendererClass": "neural-avatar-3d",
    "nativeRealtime": true,
    "native3d": true,
    "sessionApi": {
      "supportsAudioChunkStreaming": true,
      "supportsContinuousFramePublishing": true
    }
  }
}
```

If that does not happen, the missing piece is still the external renderer host, not the Runpod pod wiring.
