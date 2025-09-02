---
publishDate: 2025-09-01
title: 'Using Best-Candidate algorithm for random bodies in orbit position generation'
excerpt: An algorithm to generate 1000s of positions in a 3D orbit around a center, without overlaps, with varying scales and inner and outer orbit limits.
image: '~/assets/images/blog/best-candidate.png'
tags:
  - dots
  - randomness
  - procedural-generation
metadata:
  canonical: https://parallelcascades.com/best-candidate-orbit
---
# Introduction

This method is based on best-candidate algorithm - a naive approximation for poisson disc sampling that easily works in 3D, and natively supports different points radii, or scales - so that we can for example generate a field of asteroids with different sizes, but never overlapping.
